Feature: Authenticate Lambdatest
   @Regression
  Scenario Outline: Authenticate Lambdatest with Standard User
    Given login to Lambda application with "<username>" and "<password>"
    When click on Login Button
    Then User should be logged in succesfully

    Examples:
    |username                |password   |
    |suyash.joshi27@gmail.com|Suy437429j |

    Scenario Outline: Authenticate Lambdatest with Admin User
    Given login to Lambda application with "<username>" and "<password>"
    When click on Login Button
    Then User should be logged in succesfully

    Examples:
    |username                |password   |
    |asasa@dsadsa.com        |Rahul1     |

    Scenario Outline: Authenticate Lambdatest with Unauthorized User
    Given login to Lambda application with "<username>" and "<password>"
    When click on Login Button
    Then User should Not be logged in succesfully and error message should be displayed "<ErrorMessage>"

    Examples:
    |username                |password   | ErrorMessage                                         |
    |loloxxx                 |CCC        | Warning: No match for E-Mail Address and/or Password.|
    

    