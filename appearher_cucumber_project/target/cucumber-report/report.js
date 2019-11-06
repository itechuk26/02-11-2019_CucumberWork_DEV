$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/signup.feature");
formatter.feature({
  "line": 1,
  "name": "Sign up Feature",
  "description": "",
  "id": "sign-up-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12830944000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As user I want to verify Sign up function",
  "description": "",
  "id": "sign-up-feature;as-user-i-want-to-verify-sign-up-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I clik on sign up with Email",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"Divyesh\" into First name field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter \"Patel\" into Last name field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Enter Email Address  into Email field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Enter \"Abcd1234\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should sign up successfully and I should see Dashboard Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 403667600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_click_on_sign_up_link()"
});
formatter.result({
  "duration": 377305600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_clik_on_sign_up_with_Email()"
});
formatter.result({
  "duration": 342708700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Divyesh",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.i_Enter_into_First_name_field(String)"
});
formatter.result({
  "duration": 358822000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.i_Enter_into_Last_name_field(String)"
});
formatter.result({
  "duration": 255791300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_Enter_Email_Address_into_Email_field()"
});
formatter.result({
  "duration": 755877900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.i_Enter_into_password_field(String)"
});
formatter.result({
  "duration": 408186800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_click_on_sign_up_button()"
});
formatter.result({
  "duration": 173192200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.i_should_sign_up_successfully_and_I_should_see_Dashboard_Tab()"
});
formatter.result({
  "duration": 3420538400,
  "status": "passed"
});
formatter.after({
  "duration": 873754500,
  "status": "passed"
});
});