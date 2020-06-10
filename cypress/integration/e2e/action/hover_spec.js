describe("hover demo",()=> {
    it("should hover successfully", () => {
        ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
            it(`dispatches event: '${event}`, function () {
                // if your app doesnt use jQuery then we use .trigger()
                // https://on.cypress.io/trigger

                cy.get('#no-jquery').trigger(event)
                cy.get('#messages').should('contain', `the event ${event} was fired`)
            })
        })
    });
});