package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

/**
 * Created by : Divyesh Patel
 * since : Thursday  24/10/2019
 * Time  : 00:08
 **/


public class ElectronicsPage extends Util {

    private static final Logger log = LogManager.getLogger(ElectronicsPage.class.getName());

    public void openElectronicsPage() {
        log.info("Click on Electronics page");
        clickOnElement(By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Electronics')]"));
    }

    public void openCellphoneOption() {
        log.info("Click on Cell phone option");
        clickOnElement(By.xpath("//img[@title='Show products in category Cell phones']"));
    }

    public void clickOnHTCMobile() {
        log.info("Click on HTC Mobile");
        clickOnElement(By.xpath("//img[@title='Show details for HTC One M8 Android L 5.0 Lollipop']"));
    }

    public void addToCart() {
        log.info("Click on Add to Cart");
        clickOnElement(By.xpath("//input[@id='add-to-cart-button-18']"));
    }

    public void verifyNotificationBarText() {
        log.info("Verify product been added to shopping cart");

        String expectedText = "The product has been added to your shopping cart";
        String actualText = driver.findElement(By.xpath("//div[@class='bar-notification success']")).getText();

        verifyActualAndExpected(expectedText, actualText);
    }
}
