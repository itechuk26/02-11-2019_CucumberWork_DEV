package com.nopcommerce.demo;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by : Divyesh Patel
 * since : Monday  04/11/2019
 * Time  : 12:03
 **/

@RunWith(Cucumber.class)
@CucumberOptions(
        features =".",
        plugin = {"pretty","html:target/cucumber-report"},
        dryRun = false,
        monochrome = false
)

public class TestRunner {

}
