package uk.co.mirchmasala_takeaway.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.mirchmasala_takeaway.utility.Util;

/**
 * Created by : Divyesh Patel
 * since : Wednesday  06/11/2019
 * Time  : 10:26
 **/

public class LoginPage extends Util {

    @FindBy (id = "partialLoginButton")
    WebElement _loginlink;

    @FindBy (id = "LoginEmail")
    WebElement _emailfield;

    @FindBy (id = "Password")
    WebElement _passwordfield;

    @FindBy (xpath = "//button[@id='login']")
    WebElement _loginButton;

    public void clickOnLoginLink()
    {
        clickOnElement(_loginlink);
    }

    public void enterEmail(String str)
    {
        sendTextToElement(_emailfield, str);
    }

    public void enterPassword(String str)
    {
        sendTextToElement(_passwordfield, str);
    }

    public void clickOnLoginButton()
    {
        clickOnElement(_loginButton);
    }

    public String verityInvalidLogin()
    {
        return getTextFromElement(By.xpath("//li[contains(text(),'Wrong Email and/or password')]"));
    }

}
