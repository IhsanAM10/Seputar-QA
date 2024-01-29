const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('the user is on the homepage of the website', () => {
	cy.visit('http://zero.webappsecurity.com/')
})

When('I submit "online" in the search bar', () => {
	cy.get('#searchTerm').type('online {enter}')
})

Then('the search results page should be displayed', () => {
	cy.wait(2000)
	cy.get('h2', { timeout: 10000 }).should('contain.text', 'Search Results')
})
