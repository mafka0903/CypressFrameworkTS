import { faker } from "@faker-js/faker";

export const testData = {
  DataForContactUs: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    businessEmail: faker.internet.email(),
    phoneNumber: faker.number.int({ min: 8, max: 8 }),
    companyWebsite: faker.internet.url(),
    requestDescribe: faker.string.sample(),
    howHearAbout: faker.string.sample(),
  },
  Dropdown: {
    reasonForContact: "Support",
    phoneCode: "United Kingdom (+44)",
  },
  Products: {
    telnyxHat: "Telnyx Classic Hat",
  },

  ExpectedText: {
    upperText: "Experience AI-powered connectivity",
  },
};

export const urls = {
  homePage: "https://telnyx.com",
  pricingPage: "https://telnyx.com/pricing",
  shopPage: "https://shop.telnyx.com",
  linkedinTelnyx: "https://www.linkedin.com/company/telnyx/",
  twitterTelnyx: "https://twitter.com/telnyx",
  facebookTelnyx: "https://www.facebook.com/Telnyx/",
};
