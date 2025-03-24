class homePage {
  elements = {
    telnyxSvg: () => cy.get(".c-UazGY .mchNoDecorate svg"),
    mainMenu: () => cy.get("#main-menu"),
    expiriensAI: () => cy.get("h1 .c-PJLV"),

    menuElements: () => cy.get(".c-swQxl"),
    dropdownProducts: () => cy.get(".c-jLWzSx"),

    headerOptions: () => cy.get("div .c-hzhYFJ"),

    sotialTable: () => cy.get("ul.c-ejcPbY"),
    footerSocial: () => cy.get(".c-ejcPbY .c-tKuzq.mchNoDecorate"),

    messageSuccessfulSend: () => cy.get("h1.c-PJLV"),
    messageEmptyField: () =>
      cy.get("#ValidMsgHow_did_you_hear_about_Telnyx_Open__c"),
  };

  clickProducts() {
    this.elements.menuElements().first().click();
  }

  clickPricing() {
    this.elements.menuElements().eq(2).click();
  }

  clickContactUs() {
    this.elements.headerOptions().eq(2).click();
  }
}

export default new homePage();
