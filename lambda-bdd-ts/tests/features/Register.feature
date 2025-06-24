# Feature: Register Lambdatest

#   Scenario Outline: Register on Lambdatest with mandatory Test data
#     Given Launch the Lambdatest web application
#     When click on Register Button
#     Then User should be on Register Account page
#     Then user enters values "<FirstName>", "<LastName>", "<E-Mail>", "<Telephone>", "<Password>", "<PasswordConfirm>"
#     Then user clicks on Privacy Policy radio Button
#     Then user clicks on Continue Button
#     Then user account is created

#     Examples:
#       | FirstName | LastName | E-Mail            | Telephone  | Password         | PasswordConfirm         |
#       | Rahul     | Vaidya   | asasa3@dsadsa.com | 9823121232 | Rahuldeshmukh1   | Rahuldeshmukh1          |
