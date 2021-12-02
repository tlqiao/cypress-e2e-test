const {mkdir, exec } = require('shelljs');
const path = require('path');
const fs = require('fs');
let pageUrlArray=[];
//mac use
//let pageUrlFileBasePath='cypress/fixtures/testData/performance';
//windows use
let pageUrlFileBasePath="cypress/fixtures/testData/performance";
let pageUrlFileNameForBMC='BMCPageLoad.txt';
//mac use
//let reportFileBasePathForBMC='cypress/reports/performance/BMC';
//windows use
let reportFileBasePathForBMC="cypress/reports/performance/BMC";

let reportFileBaseNameForBMC='BMCPageLoadReport_';

function generatePageLoadReportForBMC(){
    generateReport(pageUrlFileBasePath,pageUrlFileNameForBMC,reportFileBasePathForBMC,reportFileBaseNameForBMC)
}
function generateReport(pageUrlFileBasePath,pageUrlFileName,reportFileBasePath,reportFileBaseName){
    console.log("---check and clear old report---");
    setupBeforeTest(reportFileBasePath)
    console.log("---begin to test with lighthouse---");
    let PageUrlFilePath=path.join(path.resolve(),pageUrlFileBasePath,pageUrlFileName);
    fs.readFile( PageUrlFilePath,function(err, data) {
        if(err) {console.error(err); return;}
        pageUrlArray = data.toString().split("\n");
        for (let i in pageUrlArray){
            console.log(pageUrlArray[i]);
            let reportPath=path.join(path.resolve(),reportFileBasePath,reportFileBaseName+i+'.json');
            runLightHouse(pageUrlArray[i],reportPath)
        }
        // for (let i in pageUrlArray){
        //     let reportPath=path.join(path.resolve(),reportFileBasePath,reportFileBaseName+i+'.json');
        //     summaryTestTime(reportPath)
        // }
    });
}
function runLightHouse(pageUrl,reportPath){
    let command="lighthouse "+ pageUrl+ " --output=json --output-path="+reportPath+" --preset=desktop";
    console.log("--lighthouseCommand--"+command);
    exec(command);
}
function setupBeforeTest(reportFileBasePath){
    let reportFolderPath=path.join(path.resolve(),reportFileBasePath);
    if (fs.existsSync(reportFolderPath)) {
        console.log('report folder exist');
        fs.rmdir(reportFolderPath, () => {
            console.log("Folder Deleted!");
        });
    } else {
        console.log('report folder does exist, create it');
        mkdir(path.join(path.resolve(),reportFileBasePath));
    }
}
function summaryTestTime(reportPath){
    let data = JSON.parse(fs.readFileSync(reportPath,'utf-8'));
    console.log(data);
    console.log(data.audits.metrics.details.items.speedIndex);
}
module.exports = {
    generatePageLoadReportForBMC:generatePageLoadReportForBMC
};

