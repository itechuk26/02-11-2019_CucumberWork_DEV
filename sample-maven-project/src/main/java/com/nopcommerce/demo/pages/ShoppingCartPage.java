package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

/**
 * Created by : Divyesh Patel
 * since : Wednesday  23/10/2019
 * Time  : 11:07
 **/

public class ShoppingCartPage extends Util {

    private static final Logger log = LogManager.getLogger(ShoppingCartPage.class.getName());

    public void clickOnShoppingCart()
    {
        log.info("Click on shopping cart page");
        clickOnElement(By.xpath("//span[@class='cart-label']"));
    }

    public void verifyText()
    {
        log.info("Verify the Shopping cart page");
        String shopping_cart_welcometext = "Shopping cart";
        String actual_Text = getTextFromElement(By.xpath("//h1[contains(text(),'Shopping cart')]"));
        verifyActualAndExpected(shopping_cart_welcometext,actual_Text);
    }
}
