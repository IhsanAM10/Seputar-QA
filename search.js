import SearchPage from './Search.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('the user is on the homepage of the website', () => {
	SearchPage.visit()
})

When('I submit "online" in the search bar', () => {
	SearchPage.submitSearchPage('online {enter}')
})

Then('the search results page should be displayed', () => {
	cy.wait(2000)
	cy.get('h2').should('contain.text', 'Search Results')
})
