import { testData } from "../fixtures/data.fixtures";

class contactUsPage {
  elements = {
    reasonForContact: () => cy.get("div #Reason_for_Contact__c"),
    firstName: () => cy.get("#FirstName"),
    lastName: () => cy.get("#LastName"),
    businessEmail: () => cy.get("#Email"),
    phoneCode: () => cy.get("#Phone_Number_Extension__c"),
    phoneNumber: () => cy.get("#Phone_Number_Base__c"),
    companyWebsite: () => cy.get("#Website"),
    requestDescribe: () => cy.get("#LblForm_Additional_Information__c"),
    howHearAbout: () => cy.get("#How_did_you_hear_about_Telnyx_Open__c"),
    submitButton: () => cy.get('button[type="submit"]'),
  };

  selectSalesInquiry() {
    this.elements.reasonForContact().select(testData.Dropdown.reasonForContact);
  }

  typeFirstName() {
    this.elements.firstName().type(testData.DataForContactUs.firstName);
  }

  typeLasttName() {
    this.elements.lastName().type(testData.DataForContactUs.lastName);
  }

  typeBusinessEmail() {
    this.elements.businessEmail().type(testData.DataForContactUs.businessEmail);
  }

  selectCountry() {
    this.elements.phoneCode().select(testData.Dropdown.phoneCode);
  }

  typePhoneNumber() {
    this.elements.phoneNumber().type(testData.DataForContactUs.phoneNumber);
  }

  typeCompanyWebsite() {
    this.elements
      .companyWebsite()
      .type(testData.DataForContactUs.companyWebsite);
  }

  typeRequestDescribe() {
    this.elements
      .requestDescribe()
      .type(testData.DataForContactUs.requestDescribe);
  }
  typeHowHearAbout() {
    this.elements.howHearAbout().type(testData.DataForContactUs.howHearAbout);
  }

  clickSubmitButton() {
    this.elements.submitButton().scrollIntoView().click();
  }
}

export default new contactUsPage();
