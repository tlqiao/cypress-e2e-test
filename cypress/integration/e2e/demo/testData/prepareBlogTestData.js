const util = require('../helper/util');
const testDataMange = require('../testData/testDataManage');
const configManage = require('../config/configManage');
function createBlogWithRegularUser(){
testDataMange.getLoginUserInfo('loginUser');
    cy.get('@loginUser').then((data) => {
        util.getToken(data.regular.email,data.regular.password)
            .then((token)=> {
                cy.request({
                    method: 'POST',
                    url: configManage.getApiBaseUrl()+'/api/articles/',
                    headers: {
                        'authorization': 'Token '+token
                    },
                    body: {
                        "article": {
                            "tagList": [],
                            "title": "testTitle",
                            "description": "test",
                            "body": "test"
                        }
                    }
                }).then(response => {
                    expect(response.status).to.eq(200);
                })
            })
    })
}
module.exports = {
    createBlogWithRegularUser:createBlogWithRegularUser
};