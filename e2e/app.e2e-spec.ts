import { WebProjectMay2017Page } from './app.po';

describe('web-project-may2017 App', () => {
  let page: WebProjectMay2017Page;

  beforeEach(() => {
    page = new WebProjectMay2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wp works!');
  });
});
