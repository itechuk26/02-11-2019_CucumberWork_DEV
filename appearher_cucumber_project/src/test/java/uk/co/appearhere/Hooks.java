package uk.co.appearhere;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.appearhere.basepage.BasePage;
import uk.co.appearhere.browserselector.BrowserSelector;
import uk.co.appearhere.loadproperty.LoadProperty;

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
