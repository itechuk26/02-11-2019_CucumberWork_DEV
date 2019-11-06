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
    public void i_am_on_home_page()  {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^I click on Login Link$")
    public void i_click_on_Login_Link() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should Navigate to login page successfully$")
    public void i_should_Navigate_to_login_page_successfully() {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals("Welcome, Please Sign In!", new LoginPage().welcomeText());
    }
}
