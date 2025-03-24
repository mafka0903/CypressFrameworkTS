import { testData } from "../fixtures/data.fixtures";

class pricingPage {
  elements = {
    communications: () => cy.get(".c-PJLV.c-ihLeEO.c-PJLV-cHtIMp-dark-false"),
    downloadFirstName: () => cy.get("#FirstName"),
    downloadLastName: () => cy.get("#LastName"),
    downloadBussinessEmail: () => cy.get("#Email"),
    downloadSubmitButton: () => cy.get("span .mktoButton"),
    messageSuccesfulDownload: () =>
      cy.get(".c-PJLV.c-PJLV-kmbBBS-dark-true.c-PJLV-ghYBfS-lead-true"),
  };

  clickMessagingAPI() {
    this.elements.communications().first().click();
  }

  typeDownloadFirstName() {
    this.elements.downloadFirstName().type(testData.DataForContactUs.firstName);
  }

  typeDownloadLastName() {
    this.elements.downloadLastName().type(testData.DataForContactUs.lastName);
  }

  typeDownloadBussinessEmail() {
    this.elements
      .downloadBussinessEmail()
      .type(testData.DataForContactUs.businessEmail);
  }

  clickDownlosdSubmitButton() {
    this.elements.downloadSubmitButton().click();
  }
}

export default new pricingPage();
