package com.nopcommerce.demo;

import com.nopcommerce.demo.basepage.BasePage;
import com.nopcommerce.demo.browserselector.BrowserSelector;
import com.nopcommerce.demo.loadproperty.LoadProperty;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * Created by : Divyesh Patel
 * since : Monday  04/11/2019
 * Time  : 12:03
 **/

public class Hooks extends BasePage {

    BrowserSelector browserSelector = new BrowserSelector();
    LoadProperty loadProperty = new LoadProperty();

    @Before
    public void setUp()
    {
        browserSelector.selectBrowser(loadProperty.getProperty("browser"));
    }

    @After
    public void tearDown()
    {
        driver.quit();
    }

}
