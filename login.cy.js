const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given(' the user is on the homepage of the website', () => {
	cy.visit('http://zero.webappsecurity.com/')
})

When('I submit "online" in the search bar', () => {
	cy.get('#searchTerm').tyoe('searchTerm')
})

And('I clicks on the search button', () => {
	cy.get('button[type="submit"]').click()
})

Then('the search results page should be displayed', () => {
	cy.url().should('include', '/search.html')
	cy.get('h2').should('contain.text', 'Search Results')
})
