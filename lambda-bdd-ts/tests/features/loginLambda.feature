Feature: Ecommerce End to End
   @Regression
  Scenario: Placing the order
    Given login to Ecommerce allpication with "anshika@gmail.com" and "Iamking@000"
    When Add "Zara coat 3" to Cart
    Then Verify that "Zara coat 3" is displayed in the Cart
    When Enter valid details "1224 5678 1234 5678", "676","Swapnil Sharma", "swapnil.sharma@gmail.com" and "Ind" and place the order
    Then Verify order in present in order history with text as " Thankyou for the order. "

    @Validation
  Scenario Outline: Verifying login validation
    Given login to Ecommerce2 allpication with "<username>" and "<password>"
    Then Verify Error message displayed
   
    Examples:
    |username          |password   |
    |444444444444444444|Iamking@000|
    |444444444444444444|fffffffffcc|
    |444444444444444444|fffffffffcc|
    |444444444444444444|fffffffffcc|
    