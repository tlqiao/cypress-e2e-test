describe("scenario_001 for BMP test", () => {
    it("search by keyword", () => {
    cy.visit("https://www.biomedcentral.com/");
    cy.get('header button span').contains('Search').click();
    cy.get('input[id="publisherSearch"]').clear();
    cy.get('input[id="publisherSearch"]').type("carbon neutral");
    cy.get('input[id="publisherSearch"]').type('{enter}')
    })
});