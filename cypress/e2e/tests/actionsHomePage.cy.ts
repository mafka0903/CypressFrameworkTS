import homePage from "../../pages/homePage";
import contactUsPage from "../../pages/contactUsPage";
import pricingPage from "../../pages/pricingPage";
import { testData, urls } from "../../fixtures/data.fixtures";

describe("home page actions", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("checking the opening of the main page", () => {
    cy.wait(15000);
    homePage.elements.telnyxSvg().should("be.visible");
    homePage.elements
      .expiriensAI()
      .should("have.text", testData.ExpectedText.upperText);
  });

  it("verify that clicking on a menu option with a dropdown correctly displays a list of available sub-options", () => {
    homePage.clickProducts();
    homePage.elements.dropdownProducts().should("be.visible");
  });

  it("check that selecting a menu option without a dropdown redirects the user to the new page", () => {
    homePage.clickPricing();
    cy.location().should((location) => {
      expect(location.href).to.eq(urls.pricingPage);
    });
  });

  it("checking that the contact form is sent successfully when all required fields are filled in", () => {
    homePage.elements
      .headerOptions()
      .should("exist")
      .should("be.visible", { timeout: 15000 });
    homePage.clickContactUs();
    cy.wait(5000);
    contactUsPage.selectSalesInquiry();
    contactUsPage.typeFirstName();
    contactUsPage.typeLasttName();
    contactUsPage.typeBusinessEmail();
    contactUsPage.selectCountry();
    contactUsPage.typePhoneNumber();
    contactUsPage.typeCompanyWebsite();
    contactUsPage.typeRequestDescribe();
    contactUsPage.typeHowHearAbout();
    contactUsPage.clickSubmitButton();
    homePage.elements
      .messageSuccessfulSend()
      .should("exist")
      .should("be.visible");
  });

  it("checking that the contact form is sent successfully when all required fields are filled in", () => {
    homePage.elements.headerOptions().should("be.visible", { timeout: 15000 });
    homePage.clickContactUs();
    cy.wait(5000);
    contactUsPage.selectSalesInquiry();
    contactUsPage.typeFirstName();
    contactUsPage.typeLasttName();
    contactUsPage.typeBusinessEmail();
    contactUsPage.selectCountry();
    contactUsPage.typePhoneNumber();
    contactUsPage.typeCompanyWebsite();
    contactUsPage.typeRequestDescribe();
    contactUsPage.clickSubmitButton();
    homePage.elements.messageEmptyField().should("be.visible");
  });

  it("check that Download pricing is performed successfully", () => {
    homePage.clickPricing();
    pricingPage.clickMessagingAPI();
    cy.scrollTo("bottom");
    pricingPage.elements
      .downloadFirstName()
      .should("exist")
      .should("be.visible", { timeout: 15000 });
    pricingPage.typeDownloadFirstName();
    pricingPage.typeDownloadLastName();
    pricingPage.typeDownloadBussinessEmail();
    pricingPage.clickDownlosdSubmitButton();
    pricingPage.elements.messageSuccesfulDownload().should("be.visible");
  });

  it("check that user navigate to a different domain page when clicking Shop", () => {
    homePage.elements.headerOptions().should("be.visible", { timeout: 15000 });
    homePage.elements
      .headerOptions()
      .eq(1)
      .should("have.attr", "href", urls.shopPage)
      .and("have.attr", "target", "_blank");
  });

  it("checking that  Footer Links will redirect to the correct pages", () => {
    cy.scrollTo("bottom");
    cy.wait(5000);
    homePage.elements.sotialTable().should("exist").should("be.visible");
    homePage.elements
      .footerSocial()
      .should("exist")
      .should("be.visible", { timeout: 15000 });
    homePage.elements
      .footerSocial()
      .eq(0)
      .should("have.attr", "href", urls.linkedinTelnyx)
      .and("have.attr", "target", "_blank");

    homePage.elements
      .footerSocial()
      .eq(1)
      .should("have.attr", "href", urls.twitterTelnyx)
      .and("have.attr", "target", "_blank");

    homePage.elements
      .footerSocial()
      .eq(2)
      .should("have.attr", "href", urls.facebookTelnyx)
      .and("have.attr", "target", "_blank");
  });
});
