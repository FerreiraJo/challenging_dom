import buttons from '../support/elements/buttons';

describe('Click all edit and delete buttons', () => {
  beforeEach(() => {
    // see cypress.json file to consult baseUrl
    const url = Cypress.config('baseUrl') + '/challenging_dom';
    cy.visit(url)
  })

  it('Click all edit buttons', () => {
    // reference: https://docs.cypress.io/api/commands/click#Syntax
    cy.get(buttons.editBt()).click({ multiple: true })
  })

  it('Click all delete buttons', () => {
    cy.get(buttons.deleteBt()).click({ multiple: true })
  })
})
