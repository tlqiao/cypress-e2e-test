describe("scenario_005 for BMP test", () => {
    it("download pdf", () => {
        cy.visit("https://www.biomedcentral.com/journals");
        cy.get('li a[href="//pathogeneticsjournal.biomedcentral.com/articles/10.1186/1755-8417-1-1"]').click();
        cy.get('li a[href="//pathogeneticsjournal.biomedcentral.com/articles/10.1186/1755-8417-1-1.pdf"]').click();
    })
});