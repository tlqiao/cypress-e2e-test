describe("scenario_006  for Nature test", () => {
    it("submit a research article", () => {
        cy.visit("https://author-welcome.nature.com/41598/");
        cy.get('input[id="regular_submission"]').click();
        cy.get('input[value="Continue"]').click();
        cy.get('input[value="Start submission"]').click();
    })
});