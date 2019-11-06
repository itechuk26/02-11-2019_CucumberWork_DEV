Feature: Sign up Feature

  Scenario: As user I want to verify Sign up function
    Given I am on homepage
    When I click on sign up link
    And I clik on sign up with Email
    And I Enter "Divyesh" into First name field
    And I Enter "Patel" into Last name field
    And I Enter Email Address  into Email field
    And I Enter "Abcd1234" into password field
    And I click on sign up button
    Then I should sign up successfully and I should see Dashboard Tab

