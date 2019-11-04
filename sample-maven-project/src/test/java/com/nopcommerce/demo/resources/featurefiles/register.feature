Feature: Nop Commerce Demo Register Feature
  Scenario: As a user I should successfully Register
    Given I am on home page
    When I click on Register Link
    And I select Gender "male" radio button
    And I Enter first name "Divyesh" into first name field
    And I Enter Last Name "Patel" into last name field
    And I Select Day  "26" from Date of Birth
    And I Select Month  "12" from Date of Birth
    And I Select Year "1979" from Date of Birth
    And I enter email address
    And I enter company name "Raj iffoteh" int Company name field
    And I enter password "abcd1234" into password field
    And I enter Confirm password "abcd1234" into confirm password field
    And I click on register button
    Then I should register successfully