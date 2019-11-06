package uk.co.mirchmasala_takeaway;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.mirchmasala_takeaway.basepage.BasePage;
import uk.co.mirchmasala_takeaway.browserselector.BrowserSelector;
import uk.co.mirchmasala_takeaway.loadproperty.LoadProperty;


/**
 * Created by : Divyesh Patel
 * since : Saturday  02/11/2019
 * Time  : 14:23
 **/

public class Hooks extends BasePage {


    BrowserSelector browserSelector = new BrowserSelector();
    LoadProperty loadProperty = new LoadProperty();


    @Before
    public void setUp() {
        browserSelector.selectBrowser(loadProperty.getProperty("browser"));
    }

    @After
    public void tearDown() {
        driver.quit();
    }
}
