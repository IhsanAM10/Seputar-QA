const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH_BAR = '#searchTerm' // Ganti SUBMIT menjadi SEARCH_BAR agar lebih sesuai dengan konteks

class SearchPage {
	static visit() {
		cy.visit(URL)
	}

	static submitSearchPage(online) {
		cy.get(SEARCH_BAR).type('online {enter}')
	}
}

export default SearchPage
