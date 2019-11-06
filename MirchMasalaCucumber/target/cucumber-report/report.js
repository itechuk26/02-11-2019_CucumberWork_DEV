$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Mirch Masala Login Feature",
  "description": "As a user I want to check Login page funcnality",
  "id": "mirch-masala-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User shoul not login with invalid credentials",
  "description": "",
  "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on Hompage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003c\"Email\"\u003e into email address field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003c\"Password\"\u003e into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I shold not login and shold see Error Message",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Email",
        "Passwrod"
      ],
      "line": 13,
      "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "queen123@yahoo.com",
        "Queen1234"
      ],
      "line": 14,
      "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "Kingofking@gmail.com",
        "Yahoo1234"
      ],
      "line": 15,
      "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "Dcsimple@gmail.com",
        ""
      ],
      "line": 16,
      "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "",
        "Raja1245"
      ],
      "line": 17,
      "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7494209200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User shoul not login with invalid credentials",
  "description": "",
  "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on Hompage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003c\"Email\"\u003e into email address field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003c\"Password\"\u003e into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I shold not login and shold see Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_Hompage()"
});
formatter.result({
  "duration": 113338000,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_Link()"
});
formatter.result({
  "duration": 113008500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_email_address_field(String)"
});
formatter.result({
  "duration": 222279100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_password_field(String)"
});
formatter.result({
  "duration": 149133000,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_button()"
});
formatter.result({
  "duration": 85730600,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message()"
});
formatter.result({
  "duration": 10081937700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(text(),\u0027Wrong Email and/or password\u0027)]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OM\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Paavan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56525}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: eafbe0522a6afcf51f3a2f70c06ee2f8\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(text(),\u0027Wrong Email and/or password\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat uk.co.mirchmasala_takeaway.utility.Util.getTextFromElement(Util.java:49)\r\n\tat uk.co.mirchmasala_takeaway.pages.LoginPage.verityInvalidLogin(LoginPage.java:50)\r\n\tat uk.co.mirchmasala_takeaway.Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message(Login_StepDefs.java:51)\r\n\tat ✽.Then I shold not login and shold see Error Message(src/test/java/resources/featurefiles/login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 704330500,
  "status": "passed"
});
formatter.before({
  "duration": 5498186200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User shoul not login with invalid credentials",
  "description": "",
  "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on Hompage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003c\"Email\"\u003e into email address field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003c\"Password\"\u003e into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I shold not login and shold see Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_Hompage()"
});
formatter.result({
  "duration": 108300,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_Link()"
});
formatter.result({
  "duration": 117539900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_email_address_field(String)"
});
formatter.result({
  "duration": 239175000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_password_field(String)"
});
formatter.result({
  "duration": 161325400,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_button()"
});
formatter.result({
  "duration": 75558600,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message()"
});
formatter.result({
  "duration": 10054671100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(text(),\u0027Wrong Email and/or password\u0027)]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OM\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Paavan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56622}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9edf6a8cbcb12a7ae1d63746443b6a2c\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(text(),\u0027Wrong Email and/or password\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat uk.co.mirchmasala_takeaway.utility.Util.getTextFromElement(Util.java:49)\r\n\tat uk.co.mirchmasala_takeaway.pages.LoginPage.verityInvalidLogin(LoginPage.java:50)\r\n\tat uk.co.mirchmasala_takeaway.Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message(Login_StepDefs.java:51)\r\n\tat ✽.Then I shold not login and shold see Error Message(src/test/java/resources/featurefiles/login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 712976200,
  "status": "passed"
});
formatter.before({
  "duration": 4801021000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User shoul not login with invalid credentials",
  "description": "",
  "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on Hompage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003c\"Email\"\u003e into email address field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003c\"Password\"\u003e into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I shold not login and shold see Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_Hompage()"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_Link()"
});
formatter.result({
  "duration": 105041300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_email_address_field(String)"
});
formatter.result({
  "duration": 227780800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_password_field(String)"
});
formatter.result({
  "duration": 138820600,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_button()"
});
formatter.result({
  "duration": 102529900,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message()"
});
formatter.result({
  "duration": 10031289900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(text(),\u0027Wrong Email and/or password\u0027)]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OM\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Paavan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56708}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0dcbac8bab9b59f96708ba74d8aab7cf\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(text(),\u0027Wrong Email and/or password\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat uk.co.mirchmasala_takeaway.utility.Util.getTextFromElement(Util.java:49)\r\n\tat uk.co.mirchmasala_takeaway.pages.LoginPage.verityInvalidLogin(LoginPage.java:50)\r\n\tat uk.co.mirchmasala_takeaway.Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message(Login_StepDefs.java:51)\r\n\tat ✽.Then I shold not login and shold see Error Message(src/test/java/resources/featurefiles/login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 706835500,
  "status": "passed"
});
formatter.before({
  "duration": 5393389900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User shoul not login with invalid credentials",
  "description": "",
  "id": "mirch-masala-login-feature;user-shoul-not-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on Hompage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003c\"Email\"\u003e into email address field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003c\"Password\"\u003e into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I shold not login and shold see Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_Hompage()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_Link()"
});
formatter.result({
  "duration": 92021300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_email_address_field(String)"
});
formatter.result({
  "duration": 252228300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 10
    }
  ],
  "location": "Login_StepDefs.i_enter_into_password_field(String)"
});
formatter.result({
  "duration": 150183300,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_click_on_Login_button()"
});
formatter.result({
  "duration": 69801300,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message()"
});
formatter.result({
  "duration": 10023197100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[contains(text(),\u0027Wrong Email and/or password\u0027)]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OM\u0027, ip: \u0027192.168.0.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Paavan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3999793926aa1d661d4fe3fa4d841169\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(text(),\u0027Wrong Email and/or password\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat uk.co.mirchmasala_takeaway.utility.Util.getTextFromElement(Util.java:49)\r\n\tat uk.co.mirchmasala_takeaway.pages.LoginPage.verityInvalidLogin(LoginPage.java:50)\r\n\tat uk.co.mirchmasala_takeaway.Login_StepDefs.i_shold_not_login_and_shold_see_Error_Message(Login_StepDefs.java:51)\r\n\tat ✽.Then I shold not login and shold see Error Message(src/test/java/resources/featurefiles/login.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 694058100,
  "status": "passed"
});
});