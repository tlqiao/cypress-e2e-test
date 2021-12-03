describe("scenario_003 for BMP test", () => {
    it("explore journal by letter", () => {
        cy.visit("https://www.biomedcentral.com/journals");
        cy.get('p a[href="/journals-a-z"]').click();
        cy.get('p a[href="#Chemistry"]').click();
        cy.get('li a[href="//biotechnologyforbiofuels.biomedcentral.com/"]').contains('Biotechnology for Biofuels').click();
    })
});