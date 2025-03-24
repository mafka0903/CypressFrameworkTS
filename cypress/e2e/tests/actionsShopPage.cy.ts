import { testData, urls } from "../../fixtures/data.fixtures";
import shopPage from "../../pages/shopPage";

describe("shop page actions", () => {
  beforeEach(() => {
    cy.visit(urls.shopPage);
  });
  it("checking the search function", () => {
    shopPage.clickSearchIcon();
    cy.wait(5000);
    shopPage.typeSearchField();
    shopPage.clickSearchFieldButton();
    shopPage.elements
      .productNameCard()
      .should("contain.text", testData.Products.telnyxHat);
  });

  it("checking that user has the ability to add a product to the cart", () => {
    shopPage.clickHeaderMenuShop();
    shopPage.elements.productGridContainer().should("be.visible");
    shopPage.clickAddToCard();
    shopPage.elements.yourCard().should("be.visible");
    shopPage.elements.productInTheCard().should("be.visible");
  });
});
