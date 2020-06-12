class DemoObjects{
getOperand1Element()
{
    return cy.get('input[ng-model="first"]')
}

getOperand2Element()
{
    return cy.get('input[ng-model="second"]')
}

getGoElement()
{
    return cy.get('#gobutton')
}

}
export default DemoObjects;