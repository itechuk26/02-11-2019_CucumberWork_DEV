package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

/**
 * Created by : Divyesh Patel
 * since : Wednesday  23/10/2019
 * Time  : 10:58
 **/

public class ComputerPage extends Util {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    By computerpagelink = By.xpath("//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]");

    By desktoplink = By.xpath("//div[@class='item-grid']//div[1]//div[1]//div[1]//a[1]//img[1]");

    By notebooklink = By.xpath("//div[@class='page-body']//div[2]//div[1]//div[1]//a[1]//img[1]");

    By softwarelink = By.xpath("//div[@class='master-wrapper-content']//div[3]//div[1]//div[1]//a[1]//img[1]");

    public void clickOnComputerPage() {
        log.info("Clickig on ComputerPage");
        clickOnElement(computerpagelink);
    }

    public void clickOnDesktopLink() {
        log.info("Click on Desktop Link");
        clickOnElement(desktoplink);
    }

    public void clickOnNotebookLink() {
        log.info("Click on Notebook Link");
        clickOnElement(notebooklink);
    }

    public void clickOnSoftwareLink() {
        log.info("Click on software link");
        clickOnElement(softwarelink);
    }
}
