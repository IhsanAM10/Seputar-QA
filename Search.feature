Feature: Search Feature

  Scenario: I searches for information on the website
    Given the user is on the homepage of the website
    When I submit "online" in the search bar
    And I clicks on the search button
    Then the search results page should be displayed
