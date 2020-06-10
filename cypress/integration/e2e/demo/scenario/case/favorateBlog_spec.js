const util = require('../../helper/util');
const globalFeedPage = require('../page/globalFeedPage');
const prepareBlogTestData = require('../../testData/prepareBlogTestData');
const testDataManage = require('../../testData/testDataManage');
describe("favorite blog test", () => {
    beforeEach('prepare blog for test', () => {
        prepareBlogTestData.createBlogWithRegularUser();
    });
        it("should favorite blog successfully", () => {
            util.loginWithRegularUser();
            globalFeedPage.goToGlobalFeed();
            testDataManage.getLoginUserInfo('userInfo');
            cy.get('@userInfo').then((data) => {
                globalFeedPage.favoriteBlog(data.regular.username);
                globalFeedPage.shouldFavoriteBlogSuccess(data.regular.username);
            });
        })
    });