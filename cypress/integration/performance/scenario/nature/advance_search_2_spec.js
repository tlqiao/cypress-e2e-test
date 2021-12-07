describe("scenario_002 for Nature test", () => {
    it("advanced search", () => {
        cy.visit("https://www.nature.com/");
        cy.get('header li a span').contains('Search').click();
        cy.get('p a[href="/search/advanced"]').click();
        cy.get('input[id="advanced-search-keywords"]').clear();
        cy.get('input[id="advanced-search-keywords"]').type('carbon neutral');
        cy.get('input[name="journals"]').type('Nature');
        cy.get('input[name="journals"]').type('{enter}');
    })
});