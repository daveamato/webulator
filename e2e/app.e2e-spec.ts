import { WebulatorPage } from './app.po';

describe('webulator App', () => {
  let page: WebulatorPage;

  beforeEach(() => {
    page = new WebulatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
