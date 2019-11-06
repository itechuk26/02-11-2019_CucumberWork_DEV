package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

/**
 * Created by Jay
 */
public class HomePage extends Util {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    By registerLink = By.linkText("Register");
    By loginLink = By.linkText("Log in");

    By computersPage = By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]");
    By electronicsPage = By.xpath("/html[1]/body[1]/div[6]/div[2]/ul[1]/li[2]/a[1]");
    By apperalPage = By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Apparel')]");
    By digitalDownloadpage = By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Digital downloads')]");
    By booksPage = By.xpath("/html[1]/body[1]/div[6]/div[2]/ul[1]/li[5]/a[1]");
    By jewelryPage = By.xpath("/html[1]/body[1]/div[6]/div[2]/ul[1]/li[5]/a[1]");
    By giftcardsPage = By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Gift Cards')]");


    public void clickOnRegisterLink()
    {
        log.info("Click on RegisterLlink");
        clickOnElement(registerLink);
    }

    public void clickOnLoginLink(){
        log.info("Click on Login Link");
        clickOnElement(loginLink);
    }

    public void clickOnComputerPage()
    {
        log.info("Click on ComputerPage");
        clickOnElement(computersPage);
    }

    public String verifyComputerPage() {
        log.info("Verify the Computer page");
        return getTextFromElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]"));
    }


    public void clickOnElectronicsPage()
    {
        log.info("Click on Electroings page");
        clickOnElement(electronicsPage);
    }

    public String verifyElectronicsPage()
    {
        log.info("Verify the Electronics Page");
        return getTextFromElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Electronics')]"));
    }

    public void clickOnApperalPage()
    {
        log.info("Click on the Apperal Page");
        clickOnElement(apperalPage);
    }

    public String verifyApperalPage()
    {
        log.info("Verify the Apperal Page");
        return getTextFromElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Apparel')]"));
    }

    public void clickOnDigitalDownloadPage()
    {
        log.info("Click on Digital download page");
        clickOnElement(digitalDownloadpage);
    }

    public String verifyDigitalDownloadPage()
    {
        log.info("Verify the Digital download page");
        return getTextFromElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Digital downloads')]"));
    }

    public void clickOnBooksPage()
    {
        log.info("Click on Books page");
        clickOnElement(booksPage);
    }

    public String verifyBooksPage()
    {
        log.info("Vefify books page");
        return getTextFromElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]"));
    }

    public void clickOnJewelryPage()
    {
        log.info("Click on Jewelry Page");
        clickOnElement(jewelryPage);
    }

    public String verifyJewelryPage()
    {
        log.info("Verify the Jewelry Page");
        return getTextFromElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Jewelry')]"));
    }

    public void clickOnGiftcardsPage()
    {
        log.info("Click on Gift Card page");
        clickOnElement(giftcardsPage);
    }

    public String verifyGiftCardsPage()
    {
        log.info("Verity teh Gift Cards Page");
        return getTextFromElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Gift Cards')]"));
    }

    public void selectCurrencyFromMenu(String str) {
        log.info("Select Currency from home page");
        selectByVisibleTextFromDropDown(By.xpath("//select[@id='customerCurrency']"),str);
    }

    public void verifyDollorCurrencySelectedSuccessfully() {
        log.info("Verity Dollor has been selected from Currency drop down menu");
        String expectedValue = "$1,200.00";
        String actualValue = getTextFromElement(By.xpath("//span[contains(text(),'$1,200.00')]"));

        verifyActualAndExpected(expectedValue, actualValue);
    }

    public void verifyEuroCurrencySelectedSuccessfully() {
        log.info("Verity Euro has been selected from Currency drop down menu");

        String expectedValue = "Ђ1548.00";
        String actualValue = getTextFromElement(By.xpath("//span[contains(text(),'1548.00')]"));

        verifyActualAndExpected(expectedValue, actualValue);
    }
}
