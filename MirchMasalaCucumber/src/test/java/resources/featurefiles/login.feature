Feature: Mirch Masala Login Feature
  As a user I want to check Login page funcnality

  Scenario Outline:User shoul not login with invalid credentials
    Given I am on Hompage
    When I click on Login Link
    And I enter "<Email>" into email address field
    And I enter "<Password>" into password field
    And I click on Login button
    Then I shold not login and shold see Error Message

    Examples:
      | Email                | Password  |
      | queen123@yahoo.com   | Queen1234 |
      | Kingofking@gmail.com | Yahoo1234 |
