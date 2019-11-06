Feature: HomePage Feature
  As a user I should successfully navigate to all the pages on the homepage

  Scenario Outline: user should navigate to Different pages of the homepage
    Given I am on home page
    When  I click on "<link>" page
    Then I shold load related page successfully

    Examples:
      | link              |
      | Computers         |
      | Electronics       |
      | Apparel           |
      | Digital downloads |
      | Books             |
      | Jewelry           |
      | GiftCards         |

