import buttons from '../support/elements/buttons';

describe('Click all buttons', () => {
    beforeEach(() => {
      // see cypress.json file to consult baseUrl
      const url = Cypress.config('baseUrl') + '/challenging_dom';
      cy.visit(url)
    })

    it('Click the blue button', () => {
        cy.get(buttons.blueBt()).click()
    })
  
    it('Click the red button', () => {
      cy.get(buttons.redBt()).click()
    })
  
    it('Click the green button', () => {
      cy.get(buttons.greenBt()).click()
    })
})
  