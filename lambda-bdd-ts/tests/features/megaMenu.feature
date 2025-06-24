Feature: Visit Mega Menu Page and validate

  Scenario Outline: Navigate to the Mega Menu page and select the appropriate category
    When user click on header megaMenu
    And select category "<option>"
    And Filter the category "<show>" and "<sortBy>"
    And Add to wishlist the first displayed item "<ProductName>"
    And click on View cart button on displayed pop up
    And validate selected Item displayed on Shopping cart page
    Then Click on Checkout button on shopping cart page

    Examples:
      | option  |show|sortBy      |ProductName |
      | HTC     |25  |Name (Z - A)|HTC Touch HD|
# Scenario Outline: Navigate to the Mega Menu page and select the appropriate category
# Given Launch the Lambdatest web application
# When user click on header megaMenu 
# And select category 
# And Filter the category
# And Add to cart the first displayed item
# And click on View cart button on displayed pop up
# And validate selected Item displayed on Shopping cart page
# Then Validate selected item not available on stock
