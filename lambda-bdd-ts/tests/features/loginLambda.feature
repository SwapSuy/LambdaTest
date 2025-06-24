# Feature: Authenticate Lambdatest
#    @Regression
#   Scenario Outline: Authenticate Lambdatest with Standard User
#     Given login to Lambda application with "<username>" and "<password>"
#     When click on Login Button
#     Then User should be logged in succesfully
#     Examples:
#     |username                |password   |
#     |suyash.joshi27@gmail.com|Suy437429j |
#     Scenario Outline: Authenticate Lambdatest with Admin User
#     Given login to Lambda application with "<username>" and "<password>"
#     When click on Login Button
#     Then User should be logged in succesfully
#     Examples:
#     |username                |password   |
#     |asasa@dsadsa.com        |Rahul1     |
#     Scenario Outline: Authenticate Lambdatest with Unauthorized User
#     Given login to Lambda application with "<username>" and "<password>"
#     When click on Login Button
#     Then User should Not be logged in succesfully and error message should be displayed "<ErrorMessage>" and "<EM2>"
#     Examples:
#     |username                |password   | ErrorMessage                                         |EM2                                                                                               |
#     |loloxxx                 |CCC        | Warning: No match for E-Mail Address and/or Password.|Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.  |
