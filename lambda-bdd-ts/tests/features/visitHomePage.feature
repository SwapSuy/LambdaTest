# Feature: Visit Homepage and validate

#   Scenario: Navigate Home Page and Validate locators
#     When click on Home Button
#     Then user clicks on Shop Now Button
#     Then user clicks on camera product image
#     Then user selects In Stock checkbox
#     Then user adds "<productName>" product to cart
#     Then user clicks on View Cart button
#     Then user validates the Add to Cart page "<addtocarturl>"
#     Then user clicks on checkout button
#     Then user validates the Checkout page "<checkouturl>"


#     Examples:
#       | productName | addtocarturl                                                             | checkouturl                                                                  |
#       | iPod Nano   | https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart | https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout |

#   Scenario: Select any product category and navigate to Add to Cart Page
  
#     When click on Home Button
#     Then user clicks on Shop Now Button
#     Then user clicks on Desktop product
#     Then user selects In Stock checkbox
#     Then user clicks on first product
#     Then user clicks on Add to Cart button
#     Then user clicks on View Cart button
#     Then user validates the Add to Cart page "<addtocarturl>"
#     Then user clicks on checkout button
#     Then user validates the Checkout page "<checkouturl>"

#     Examples:
#       | addtocarturl                                                             | checkouturl                                                                  | username                 | password   |
#       | https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart | https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout | suyash.joshi27@gmail.com | Suy437429j |

#   Scenario: Validate checkout functionality with Register Account
#     When click on Home Button
#     Then user clicks on Shop Now Button
#     Then user clicks on camera product image
#     Then user selects In Stock checkbox
#     Then user adds "<productName>" product to cart
#     Then user clicks on View Cart button
#     Then user clicks on checkout button
#     Then user enters and complete the checkout form

#     Examples:
#       | productName |
#       | iPod Nano   |

#   Scenario: Validate product is removed from cart using Remove button
#     When click on Home Button
#     Then user clicks on Shop Now Button
#     Then user clicks on camera product image
#     Then user selects In Stock checkbox
#     Then user adds "<productName>" product to cart
#     Then user clicks on View Cart button
#     Then user clicks on checkout button
#     Then user enters and complete the checkout form
#     Then user clicks on Remove button to remove the product from cart

#     Examples:
#       | productName |
#       | iPod Nano   |

#   Scenario: Validate compare this product functionality
#     When click on Home Button
#     Then user clicks on Shop Now Button
#     Then user clicks on camera product image
#     Then user selects In Stock checkbox
#     Then user adds "<productName>" product to compare
#     Then user clicks on Product Compare button
#     Then validate product compare table
#     Then user clicks on Add to Cart button on product compare page

#     Examples:
#       | productName |
#       | iPod Nano   |

#   Scenario: Remove all products from cart
#     When click on Home Button
#     Then user clicks on Shop Now Button
#     Then user clicks on Desktop product
#     Then user selects In Stock checkbox
#     Then user clicks on first product
#     Then user clicks on Add to Cart button
#     Then user clicks on View Cart button
#     Then user removes all products from the cart
    

#     Examples:
#       | username                 | password   |
#       | suyash.joshi27@gmail.com | Suy437429j |
