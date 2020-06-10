const util = require('../../helper/util');
const globalFeedPage = require('../page/globalFeedPage');
const blogDetailsPage = require('../page/blogDetailsPage');
const prepareBlogTestData = require('../../testData/prepareBlogTestData');
const testDataManage = require('../../testData/testDataManage');
describe("add comment for blog test", () => {
    beforeEach('prepare blog for test', () => {
        prepareBlogTestData.createBlogWithRegularUser();
    });
    it("should add comment for blog successfully", () => {
        util.loginWithRegularUser();
        globalFeedPage.goToGlobalFeed();
        testDataManage.getLoginUserInfo('userInfo');
        cy.get('@userInfo').then((data) => {
            globalFeedPage.goToBlogDetailByAuthor(data.regular.username);
        });
        blogDetailsPage.addComment("this is comment");
        blogDetailsPage.shouldAddCommentSuccessfully("this is comment");
    })
});