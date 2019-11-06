package uk.co.appearhere;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by : Divyesh Patel
 * since : Saturday  02/11/2019
 * Time  : 14:08
 **/

@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".",
        plugin = {"pretty","html:target/cucumber-report"},
        dryRun = false,
        monochrome = false

)

// tags = "@Sanity",
// monochrome = true

public class TestRunner {
}
