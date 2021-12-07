describe("scenario_007  for Nature test", () => {
    it("get research by instrument", () => {
        cy.visit("https://author-welcome.nature.com/41598/");
        cy.get('a href=["https://wayf.springernature.com/?redirect_uri=https%3A%2F%2Fwww.nature.com%2Farticles%2Fd41586-021-03549-5"]').click();
        cy.get('input[id="searchFormTextInput"]').clear();
        cy.get('input[id="searchFormTextInput"]').type("Sichuan Normal");
        cy.get('button[id="institution-submit"]').click();
        cy.get('li a').contains("Sichuan Normal University").click();
    })
});