package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

/**
 * Created by Jay
 */
public class LoginPage extends Util {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    By emailField = By.id("Email");
    By passwordField = By.id("Password");
    By loginBtn = By.xpath("//input[@class='button-1 login-button']");
    By welcomeText = By.xpath("//h1[contains(text(),'Welcome, Please Sign In!')]");

    public void enterEmail(String email){
        log.info("Enter email into email field");
        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password){
        log.info("Enter password into password field");
        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton(){
        log.info("Click on Log in Button");
        clickOnElement(loginBtn);
    }

    public String welcomeText(){
        log.info("Get the log in page welcome text");
       return getTextFromElement(welcomeText);
    }
}
