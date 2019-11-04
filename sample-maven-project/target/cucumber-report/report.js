$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/nopcommerce/demo/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Nopp commerce Demo Login Feature",
  "description": "As a user I should successfully Navigate to Login page",
  "id": "nopp-commerce-demo-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8872635100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should Navigate to Login page successfully",
  "description": "",
  "id": "nopp-commerce-demo-login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should Navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 257494300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1472691100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 74370700,
  "status": "passed"
});
formatter.after({
  "duration": 777497400,
  "status": "passed"
});
formatter.uri("src/test/java/com/nopcommerce/demo/resources/featurefiles/register.feature");
formatter.feature({
  "line": 1,
  "name": "Nop Commerce Demo Register Feature",
  "description": "",
  "id": "nop-commerce-demo-register-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5788098300,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "As a user I should successfully Register",
  "description": "",
  "id": "nop-commerce-demo-register-feature;as-a-user-i-should-successfully-register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I select Gender \"male\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I Enter first name \"Divyesh\" into first name field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Enter Last Name \"Patel\" into last name field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Select Day  \"26\" from Date of Birth",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select Month  \"12\" from Date of Birth",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Year \"1979\" from Date of Birth",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter company name \"Raj iffoteh\" int Company name field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abcd1234\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Confirm password \"abcd1234\" into confirm password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 68100,
  "status": "passed"
});
formatter.match({
  "location": "Register_stepDefs.i_click_on_Register_Link()"
});
formatter.result({
  "duration": 1797428200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 17
    }
  ],
  "location": "Register_stepDefs.i_select_Gender_radio_button(String)"
});
formatter.result({
  "duration": 131465800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Divyesh",
      "offset": 20
    }
  ],
  "location": "Register_stepDefs.i_Enter_first_name_into_first_name_field(String)"
});
formatter.result({
  "duration": 330466600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "Register_stepDefs.i_Enter_Last_Name_into_last_name_field(String)"
});
formatter.result({
  "duration": 327662800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 15
    }
  ],
  "location": "Register_stepDefs.i_Select_Day_from_Date_of_Birth(String)"
});
formatter.result({
  "duration": 302584300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 17
    }
  ],
  "location": "Register_stepDefs.i_Select_Month_from_Date_of_Birth(String)"
});
formatter.result({
  "duration": 268863700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1979",
      "offset": 15
    }
  ],
  "location": "Register_stepDefs.i_Select_Year_from_Date_of_Birth(String)"
});
formatter.result({
  "duration": 337834300,
  "status": "passed"
});
formatter.match({
  "location": "Register_stepDefs.i_enter_email_address()"
});
formatter.result({
  "duration": 505897800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raj iffoteh",
      "offset": 22
    }
  ],
  "location": "Register_stepDefs.i_enter_company_name_int_Company_name_field(String)"
});
formatter.result({
  "duration": 370839600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1234",
      "offset": 18
    }
  ],
  "location": "Register_stepDefs.i_enter_password_into_password_field(String)"
});
formatter.result({
  "duration": 164594900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1234",
      "offset": 26
    }
  ],
  "location": "Register_stepDefs.i_enter_Confirm_password_into_confirm_password_field(String)"
});
formatter.result({
  "duration": 136956300,
  "status": "passed"
});
formatter.match({
  "location": "Register_stepDefs.i_click_on_register_button()"
});
formatter.result({
  "duration": 1065182000,
  "status": "passed"
});
formatter.match({
  "location": "Register_stepDefs.i_should_register_successfully()"
});
formatter.result({
  "duration": 75909800,
  "status": "passed"
});
formatter.after({
  "duration": 800263400,
  "status": "passed"
});
});