package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

/**
 * Created by Jay
 */
public class RegisterPage extends Util {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    By Register_Link = By.linkText("Register");
    By RegisterWelcomeText = By.xpath("//h1[contains(text(),'Register')]");
    By Gender = By.xpath("//span[@class='male']");
    By Firstname = By.id("FirstName");
    By Lastname = By.id("LastName");

    By DOB_Day = By.xpath("//select[@name='DateOfBirthDay']");
    By DOB_Month = By.xpath("//select[@name='DateOfBirthMonth']");
    By DOB_Year = By.xpath("//select[@name='DateOfBirthYear']");

    By Email = By.xpath("//input[@id='Email']");
    By Company_Name = By.id("Company");

    By Password = By.id("Password");
    By Confirm_Password  = By.id("ConfirmPassword");
    By Register_btn = By.id("register-button");

    public void clickOnRegisterLink()
    {
        log.info("Click on Register Link");
        clickOnElement(Register_Link);
    }

    public String RegisterWelcomeText()
    {
        return getTextFromElement(RegisterWelcomeText);
    }

    public void selectGender()
    {
        log.info("Select Gender");
        clickOnElement(Gender);
    }

    public void enterFirstName(String str)
    {
        log.info("Enter First name into first name Field");
        sendTextToElement(Firstname,str);
    }

    public void enterLastName(String str)
    {
        log.info("Enter Last name into last name Field");
        sendTextToElement(Lastname,str);
    }

    public void selectDay(String str)
    {
        log.info("Select Day for DOB");
        selectByValueFromDropDown(DOB_Day,str);
    }

    public void selectMonth(String str)
    {
        log.info("select Month for DOB");
        selectByValueFromDropDown(DOB_Month,str);
    }

    public void selectYear(String str)
    {
        log.info("Select year for DOB");
        selectByValueFromDropDown(DOB_Year,str);
    }

    public void enterEmailAddress()
    {
        log.info("Enter Random generated Email address into email field");
        String Email_Add = "Dev" + generateRandomNumber() + "@gmail.com";
        sendTextToElement(Email,Email_Add);
    }

    public void enterCompanyName(String str)
    {
        log.info("Enter company name");
        sendTextToElement(Company_Name,str);
    }

    public void enterPassword(String str)
    {
        log.info("Enter password");
        sendTextToElement(Password,str);
    }

    public void enterConfirmPassword(String str)
    {
        log.info("Enter confirm password");
        sendTextToElement(Confirm_Password,str);
    }

    public void clickOnRegisterButton()
    {
        log.info("Click on Register Button");
        clickOnElement(Register_btn);
    }

    public String registerMessage()
    {
        log.info("Get the Register page welcome message");
        return driver.findElement(By.xpath("//div[@class='result']")).getText();
    }

}
