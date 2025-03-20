import { Page, Locator } from '@playwright/test';

export class Site88Page {
  private page: Page;
  private readonly URL = 'http://testjs.epizy.com/';
  private readonly DEFAULT_ELEMENT_TIMEOUT = 30000;

  // Web Elements
  imageTitle: Locator;
  navBar: Locator;
  textBox: Locator;
  testButton: Locator;
  submitButton: Locator;
  smileImage: Locator;
  feedbackText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.imageTitle = this.page.locator('.title-image');
    this.navBar = this.page.locator('.topnav');
    this.textBox = this.page.locator('.form-control');
    this.testButton = this.page.locator('[name="testClickButton"]');
    this.submitButton = this.page.locator('[name="submitEnabled"]');
    this.smileImage = this.page.locator('.smile-image');
    this.feedbackText = this.page.locator('#amazingText');
  }

  // Methods
  async navigate() {
    await this.page.goto(this.URL);
  }

  async getTestButton() {
    return this.testButton;
  }

  async getImageTitle() {
    return this.imageTitle;
  }

  async getNewsLink() {
    const navLinks = this.navBar.locator('.//*');
    const count = await navLinks.count();
    for (let i = 0; i < count; i++) {
      const link = navLinks.nth(i);
      const href = await link.getAttribute('href');
      if (href && href.includes('news')) {
        return link;
      }
    }
    return null;
  }

  async getTextBox() {
    return this.textBox;
  }

  async getSubmitButton() {
    return this.submitButton;
  }

  async getSmileImage() {
    return this.smileImage;
  }

  async getTextAfterSubmit() {
    return this.feedbackText;
  }

  getURL() {
    return this.URL;
  }
}
