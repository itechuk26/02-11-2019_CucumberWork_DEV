package com.nopcommerce.demo;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

/**
 * Created by : Divyesh Patel
 * since : Monday  04/11/2019
 * Time  : 11:55
 **/

public class MyStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Login Link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should Navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals("Welcome, Please Sign In!", new LoginPage().welcomeText());

    }
}
