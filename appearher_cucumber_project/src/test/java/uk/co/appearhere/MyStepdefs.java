package uk.co.appearhere;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.appearhere.pages.SignUp;

/**
 * Created by : Divyesh Patel
 * since : Tuesday  05/11/2019
 * Time  : 22:50
 **/

public class MyStepdefs {

    @Given("^I am on homepage$")
    public void i_am_on_homepage()  {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^I click on sign up link$")
    public void i_click_on_sign_up_link()  {
        // Write code here that turns the phrase above into concrete actions
        new SignUp().clickOnSignupLink();
    }

    @When("^I clik on sign up with Email$")
    public void i_clik_on_sign_up_with_Email()  {
        // Write code here that turns the phrase above into concrete actions
        new SignUp().clickOnSignUpWithEmailLink();
    }

    @When("^I Enter \"([^\"]*)\" into First name field$")
    public void i_Enter_into_First_name_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new SignUp().enterFirstname(arg1);
    }

    @When("^I Enter \"([^\"]*)\" into Last name field$")
    public void i_Enter_into_Last_name_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new SignUp().enterLastname(arg1);
    }

    @When("^I Enter Email Address  into Email field$")
    public void i_Enter_Email_Address_into_Email_field()  {
        // Write code here that turns the phrase above into concrete actions
        new SignUp().enterEmail();
    }

    @When("^I Enter \"([^\"]*)\" into password field$")
    public void i_Enter_into_password_field(String arg1)  {
        // Write code here that turns the phrase above into concrete actions
        new SignUp().enterPassword(arg1);
    }

    @When("^I click on sign up button$")
    public void i_click_on_sign_up_button()  {
        // Write code here that turns the phrase above into concrete actions
        new SignUp().clickOnSignupButton();
    }

    @Then("^I should sign up successfully and I should see Dashboard Tab$")
    public void i_should_sign_up_successfully_and_I_should_see_Dashboard_Tab()  {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(new SignUp().isDashboardDisplayed());
    }
}
