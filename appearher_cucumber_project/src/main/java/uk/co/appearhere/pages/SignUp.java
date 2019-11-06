package uk.co.appearhere.pages;

import org.openqa.selenium.By;
import uk.co.appearhere.utility.Util;

/**
 * Created by : Divyesh Patel
 * since : Tuesday  05/11/2019
 * Time  : 21:49
 **/

public class SignUp extends Util {

    By homeWelcometext = By.xpath("//h1[@class='Title__mainTitle___28hVx']");
    By signinlink = By.xpath("//button[@class='Bloom__root_bg button signup radius']");
    By signupwithemaillink = By.xpath("//span[contains(text(),'Sign up with Email')]");
    By firstname = By.id("firstName");
    By lastname = By.id("lastName");
    By email = By.id("email");
    By password = By.id("password");
    By signupbtn = By.xpath("//button[@class='Bloom__root_bg Bloom__widthFull_a5 Bloom__mtr_46 Bloom__primary_bk']");
    By dashboard = By.xpath("//ul[@class='right']//a[contains(text(),'Dashboard')]");


    public String homePageVerification()
    {
        return getTextFromElement(homeWelcometext);
    }

    public String signupVerifcation()
    {
        return getTextFromElement(By.xpath("//div[@class='Bloom__root_hh']//h2[1]"));
    }

    public void clickOnSignupLink()
    {
        clickOnElement(signinlink);
    }

    public void clickOnSignUpWithEmailLink()
    {
        clickOnElement(signupwithemaillink);
    }

    public void enterFirstname(String name)
    {
        sendTextToElement(firstname, name);
    }

    public void enterLastname(String name)
    {
        sendTextToElement(lastname, name);
    }

    public void enterEmail()
    {
        String email_add = "Divyesh" + generateRandomNumber() + "@gmail.com";
        sendTextToElement(email,email_add);
    }

    public void enterPassword(String name)
    {
        sendTextToElement(password, name);
    }

    public void clickOnSignupButton()
    {
        clickOnElement(signupbtn);
    }

    public boolean isDashboardDisplayed()
    {
        return verifyThatElementIsDisplayed(dashboard);
    }
}
