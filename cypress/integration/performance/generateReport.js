const {exec} = require('shelljs');
const path = require('path');
const fs = require('fs');
let pageUrlArray = [];
let configPath = 'cypress/fixtures/testData/performance/config.json'
//windows
//let configPath="\\cypress\\fixtures\\testData\\performance\\config.json";
function getConfigs() {
    return JSON.parse(fs.readFileSync(path.join(path.resolve(), configPath), 'utf8'));
}

function generateReport(pageUrlFilePath, reportFilePath) {
    console.log("---begin to test with lighthouse---");
    fs.readFile(path.join(path.resolve(),pageUrlFilePath), function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        pageUrlArray = data.toString().split("\n");
        for (let i in pageUrlArray) {
            console.log(pageUrlArray[i]);
            let reportPath = path.join(path.resolve(), reportFilePath+i + '.json');
            runLightHouse(pageUrlArray[i], reportPath)
        }
    });
}

function runLightHouse(pageUrl, reportPath) {
    let command = "lighthouse " + "\"" + pageUrl + "\""+" --output=json --output-path=" + reportPath + " --preset=desktop";
    console.log("--lighthouseCommand--" + command);
    exec(command);
}

// function setupBeforeTest(reportFileBasePath) {
//     let reportFolderPath = path.join(path.resolve(), reportFileBasePath);
//     if (fs.existsSync(reportFolderPath)) {
//         console.log('report folder exist');
//         fs.rmdir(reportFolderPath, () => {
//             console.log("Folder Deleted!");
//         });
//     } else {
//         console.log('report folder does not exist, create it');
//         mkdir(path.join(path.resolve(), reportFileBasePath));
//     }
// }
//
// function summaryTestTime(reportPath) {
//     let data = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
//     console.log(data);
//     console.log(data.audits.metrics.details.items.speedIndex);
// }

module.exports = {
    generateReport: generateReport,
    getConfigs: getConfigs,
};

