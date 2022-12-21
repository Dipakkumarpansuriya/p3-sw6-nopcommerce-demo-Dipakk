$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Page Test",
  "description": "As a user I want to build my own computer \u0026 add to cart",
  "id": "computer-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 9997521900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 201492800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputers()"
});
formatter.result({
  "duration": 1174910100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldNavigateToComputerPage()"
});
formatter.result({
  "duration": 69550000,
  "status": "passed"
});
formatter.after({
  "duration": 1048337900,
  "status": "passed"
});
formatter.before({
  "duration": 4041839800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on Computers",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Computers",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should nevigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnComputers()"
});
formatter.result({
  "duration": 650297500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputers()"
});
formatter.result({
  "duration": 414476000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 515731600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldNevigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 67861900,
  "status": "passed"
});
formatter.after({
  "duration": 971494900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista  Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3610514200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 1185677500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 620995200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1041888500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 200262700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 171090800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 121040300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 99401100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 95198600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 80429700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 265842900,
  "status": "passed"
});
formatter.after({
  "duration": 1268861700,
  "status": "passed"
});
formatter.before({
  "duration": 4345733100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 1076679700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 561647000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1006549100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 114740000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 153064600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 126538200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 143334800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 129469100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 96060500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 260807000,
  "status": "passed"
});
formatter.after({
  "duration": 1097565100,
  "status": "passed"
});
formatter.before({
  "duration": 3842233100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista  Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 1226198600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 563459600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1175871500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 106191800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 149889600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 112427700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista  Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 76296600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 155782000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 92174700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 682025100,
  "status": "passed"
});
formatter.after({
  "duration": 1149788000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3808164000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 117200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 572957500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 83091700,
  "status": "passed"
});
formatter.after({
  "duration": 1015951600,
  "status": "passed"
});
formatter.before({
  "duration": 3659662600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"Sundarram104@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 966229700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sundarram104@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 206266500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 132687300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 365571800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 20071591200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dd07f4e4ffd0022abcc7856e439af610, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\pansu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52568}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52568/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dd07f4e4ffd0022abcc7856e439af610\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.isLogOutLinkDisplay(HomePage.java:78)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iShouldLoginSuccessfully(LoginSteps.java:48)\r\n\tat ✽.Then I should login successfully(login.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1447794500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 29,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 30,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 31,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 32,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3515056000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 920759300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 190256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 139328100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 349317400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 76763000,
  "status": "passed"
});
formatter.after({
  "duration": 1006443800,
  "status": "passed"
});
formatter.before({
  "duration": 3934179700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 84200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 650473100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 253047700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 133235300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 400053000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 61582400,
  "status": "passed"
});
formatter.after({
  "duration": 1054849400,
  "status": "passed"
});
formatter.before({
  "duration": 3549312700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 950643300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 221875900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 135651800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 415572500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 106634400,
  "status": "passed"
});
formatter.after({
  "duration": 1106920700,
  "status": "passed"
});
formatter.before({
  "duration": 3964887100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify the user should logout successfully",
  "description": "",
  "id": "login-test;verify-the-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter email \"Sundarram104@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1014991900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sundarram104@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 194276800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 123604000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 420333900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20060445200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.after({
  "duration": 1162312700,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "As user I want to register on nop commerce website",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3602547500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 921010000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 75444600,
  "status": "passed"
});
formatter.after({
  "duration": 941864600,
  "status": "passed"
});
formatter.before({
  "duration": 3692530200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify thatFirstName LastName Email Password And ConfirmPassword Fields Are Mandatory",
  "description": "",
  "id": "register-test;verify-thatfirstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the firstName error message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Verify the lastName error message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the email error message",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the password error message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the confirmPassword error message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 645044900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 151735800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheFirstNameErrorMessage()"
});
formatter.result({
  "duration": 141318600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheLastNameErrorMessage()"
});
formatter.result({
  "duration": 111619500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheEmailErrorMessage()"
});
formatter.result({
  "duration": 135665800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyThePasswordErrorMessage()"
});
formatter.result({
  "duration": 90110600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheConfirmPasswordErrorMessage()"
});
formatter.result({
  "duration": 105977400,
  "status": "passed"
});
formatter.after({
  "duration": 958203400,
  "status": "passed"
});
formatter.before({
  "duration": 3041454400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on female radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter first name \"Sundar\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select date of birth \"22\",\"January\",\"1980\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter emailid \"Sundarram104@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password1 \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "registration successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 501497100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 150019400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sundar",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 130424200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 112052700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 24
    },
    {
      "val": "January",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 346303200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sundarram104@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 194904100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 116996800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 106214000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 586970600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.registrationSuccessful()"
});
formatter.result({
  "duration": 71049700,
  "status": "passed"
});
formatter.after({
  "duration": 952211800,
  "status": "passed"
});
});