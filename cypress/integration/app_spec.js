// ***********************************************
// All of these tests are written to test
// an AngularJS calculator
// ***********************************************

describe("Calculator - AngularJS", function () {

    beforeEach(function () {

        // Go out and visit the protractor demo calculator
        // https://on.cypress.io/api/visit
        cy.visit(calculatorPageObject.url);
    });

    context("When page is initially opened", function () {
        it("The title should be Super Calculator", function () {
            // get the currently title
            //https://docs.cypress.io/v1.0/docs/title
            cy.title().should("contain", calculatorPageObject.title)
        })
    });

    context("Calculator should add numbers", function () {
        it("should add one and two", function () {
            cy
                .get(calculatorPageObject.locators.inputNumber1).type('1')
                .get(calculatorPageObject.locators.inputNumber2).type('2')
                .get(calculatorPageObject.locators.goButton).click()
                .get(calculatorPageObject.locators.result).should("contain", '3')
        })
    })

});