package uk.co.mirchmasala_takeaway;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.mirchmasala_takeaway.pages.LoginPage;

/**
 * Created by : Divyesh Patel
 * since : Wednesday  06/11/2019
 * Time  : 10:56
 **/

public class Login_StepDefs {

    @Given("^I am on Hompage$")
    public void i_am_on_Hompage()  {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("^I click on Login Link$")
    public void i_click_on_Login_Link()  {
        // Write code here that turns the phrase above into concrete actions
        new LoginPage().clickOnLoginLink();

    }

    @And("^I enter \"([^\"]*)\" into email address field$")
    public void iEnterIntoEmailAddressField(String arg0) {
        // Write code here that turns the phrase above into concrete actions
        new LoginPage().enterEmail(arg0);
    }

    @And("^I enter \"([^\"]*)\" into password field$")
    public void iEnterIntoPasswordField(String arg0) {
        // Write code here that turns the phrase above into concrete actions
        new LoginPage().enterPassword(arg0);
    }



    @And("^I click on Login button$")
    public void i_click_on_Login_button()  {
        // Write code here that turns the phrase above into concrete actions
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I shold not login and shold see Error Message$")
    public void i_shold_not_login_and_shold_see_Error_Message()  {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals("Wrong Email and/or password", new LoginPage().verityInvalidLogin());
    }


}
