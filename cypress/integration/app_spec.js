// ***********************************************
// All of these tests are written to test
// an AngularJS calculator
// ***********************************************

describe("Calculator - AngularJS", function () {
    // Set global vars
    var calculatorJSON = null;

    beforeEach(function () {
        cy.fixture("calculator.json").then(function(json){
            calculatorJSON = json;
            // Go out and visit the protractor demo calculator
            // https://on.cypress.io/api/visit
            cy.visit(calculatorJSON.url);
        })
    });

    context("When page is initially opened", function () {
        it("The title should be Super Calculator", function () {
            // get the currently title
            //https://docs.cypress.io/v1.0/docs/title
            cy.title().should("contain", calculatorJSON.title)
        })
    });

    context("Calculator should add numbers", function () {
        it("should add one and two", function () {
            cy
                .get(calculatorJSON.locators.inputNumber1).type('1')
                .get(calculatorJSON.locators.inputNumber2).type('2')
                .get(calculatorJSON.locators.goButton).click()
                .get(calculatorJSON.locators.result).should("contain", '3')
        })
    })

});