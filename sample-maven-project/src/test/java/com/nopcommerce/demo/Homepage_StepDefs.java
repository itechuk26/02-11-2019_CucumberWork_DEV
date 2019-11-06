package com.nopcommerce.demo;

import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by : Divyesh Patel
 * since : Tuesday  05/11/2019
 * Time  : 19:52
 **/

public class Homepage_StepDefs {

    @When("^I click on \"([^\"]*)\" page$")
    public void iClickOnPage(String link) {
        // Write code here that turns the phrase above into concrete actions
        switch (link) {
            case "Computers": {
                new HomePage().clickOnComputerPage();
                Assert.assertEquals("Computers", new HomePage().verifyComputerPage());
            }
            case "Electronics": {
                new HomePage().clickOnElectronicsPage();
                Assert.assertEquals("Electronics", new HomePage().verifyElectronicsPage());
            }
            case "Apparel" : {
                new HomePage().clickOnApperalPage();
                Assert.assertEquals("Apparel", new HomePage().verifyApperalPage());
            }
            case "Digital downloads" : {
                new HomePage().clickOnDigitalDownloadPage();
                Assert.assertEquals("Digital downloads", new HomePage().verifyDigitalDownloadPage());
            }
            case "Books" : {
                new HomePage().clickOnBooksPage();
                Assert.assertEquals("Books", new HomePage().verifyBooksPage());
            }
            case "Jewelry" : {
                new HomePage().clickOnJewelryPage();
                Assert.assertEquals("Jewelry", new HomePage().verifyJewelryPage());
            }
            case "Gift Cards" : {
                new HomePage().clickOnGiftcardsPage();
                Assert.assertEquals("Gift Cards", new HomePage().verifyGiftCardsPage());
            }
        }
    }


    @Then("^I shold load related page successfully$")
    public void iSholdLoadRelatedPageSuccessfully() {
    }
}
