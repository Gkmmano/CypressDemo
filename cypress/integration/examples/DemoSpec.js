/// <reference types="Cypress" />
import DemoObjects from "../../support/PageObjects/DemoObjects"

describe('Demo Module Execution', function(){

    // Creating object for imported classes
    const demonobjects  = new DemoObjects()
   
    // Invoking Test data
    this.beforeEach(function() {
        cy.fixture('Demo').then(function(testdata)
        {
            this.testdata=testdata
        })
    })

    it('Addition', function(){
        cy.visit(Cypress.env('demourl'))
        demonobjects.getOperand1Element().type(this.testdata.operand1)
        demonobjects.getOperand2Element().type(this.testdata.operand2)
        demonobjects.getGoElement().click()
    })
})
