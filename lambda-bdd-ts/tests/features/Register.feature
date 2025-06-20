Feature: Register Lambdatest
   @Regression
  Scenario: Register on Lambdatest with mandatory Test data
    Given Launch the Lambdatest web application
    When click on Register Button
    Then User should be on Register Account page
    Then user enters values "<First Name>", "<Last Name>", "<E-Mail>","<Telephone>","<Password>","<Password Confirm>"
    Then user clicks on Privacy Policy radio Button
    Then user clicks on Continue Button

    Example:

    |First Name   | Last Name  |E-Mail          |Telephone   |Password    |Password Confirm    |
    |Rahul        |Vaidya      |asasa@dsadsa.com|9823121232  |Rahul1      |Rahul1              |

    