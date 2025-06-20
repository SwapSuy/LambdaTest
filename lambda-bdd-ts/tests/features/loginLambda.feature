Feature: Authenticate Lambdatest
   @Regression
  Scenario: Authenticate Lambdatest with Standard User
    Given login to Lambda application with "anshika@gmail.com" and "Iamking@000"
    When click on Login Button
    Then User should be logged in succesfully

    Scenario: Authenticate Lambdatest with Admin User
    Given login to Lambda application with "anshika@gmail.com" and "Iamking@000"
    When click on Login Button
    Then User should be logged in succesfully

    Scenario: Authenticate Lambdatest with Unauthorized User
    Given login to Lambda application with "anshika@gmail.com" and "Iamking@000"
    When click on Login Button
    Then User should Not be logged in succesfully and error message should be displayed
    

    