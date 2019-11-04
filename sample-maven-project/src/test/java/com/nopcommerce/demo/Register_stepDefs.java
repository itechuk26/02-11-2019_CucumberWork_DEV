package com.nopcommerce.demo;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

/**
 * Created by : Divyesh Patel
 * since : Monday  04/11/2019
 * Time  : 19:42
 **/

public class Register_stepDefs {



    @When("^I click on Register Link$")
    public void i_click_on_Register_Link()  {
        // Write code here that turns the phrase above into concrete actions
        new HomePage().clickOnRegisterLink();
    }

    @When("^I select Gender \"([^\"]*)\" radio button$")
    public void i_select_Gender_radio_button(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().selectGender();
    }

    @When("^I Enter first name \"([^\"]*)\" into first name field$")
    public void i_Enter_first_name_into_first_name_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().enterFirstName(arg1);

    }

    @When("^I Enter Last Name \"([^\"]*)\" into last name field$")
    public void i_Enter_Last_Name_into_last_name_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().enterLastName(arg1);

    }

    @When("^I Select Day  \"([^\"]*)\" from Date of Birth$")
    public void i_Select_Day_from_Date_of_Birth(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().selectDay(arg1);
    }

    @When("^I Select Month  \"([^\"]*)\" from Date of Birth$")
    public void i_Select_Month_from_Date_of_Birth(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().selectMonth(arg1);
    }

    @When("^I Select Year \"([^\"]*)\" from Date of Birth$")
    public void i_Select_Year_from_Date_of_Birth(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().selectYear(arg1);
    }

    @When("^I enter email address$")
    public void i_enter_email_address()  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().enterEmailAddress();
    }

    @When("^I enter company name \"([^\"]*)\" int Company name field$")
    public void i_enter_company_name_int_Company_name_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().enterCompanyName(arg1);
    }

    @When("^I enter password \"([^\"]*)\" into password field$")
    public void i_enter_password_into_password_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().enterPassword(arg1);
    }

    @When("^I enter Confirm password \"([^\"]*)\" into confirm password field$")
    public void i_enter_Confirm_password_into_confirm_password_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().enterConfirmPassword(arg1);
    }

    @When("^I click on register button$")
    public void i_click_on_register_button()  {
        // Write code here that turns the phrase above into concrete actions
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should register successfully$")
    public void i_should_register_successfully()  {
        // Write code here that turns the phrase above into concrete actions;
        Assert.assertEquals("Your registration completed", new RegisterPage().registerMessage());
    }
}
