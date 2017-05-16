import { browser, by, element } from 'protractor';

export class WebProjectMay2017Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wp-root h1')).getText();
  }
}
