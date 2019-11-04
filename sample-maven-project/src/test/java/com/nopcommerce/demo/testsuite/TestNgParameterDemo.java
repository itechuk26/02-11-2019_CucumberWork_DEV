package com.nopcommerce.demo.testsuite;

import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

/**
 * Created by : Divyesh Patel
 * since : Saturday  26/10/2019
 * Time  : 15:03
 **/

public class TestNgParameterDemo {

    @Test
    @Parameters("MyName")
    public void test (String name)
    {
        System.out.println("Name is  : " +name);
    }
}
