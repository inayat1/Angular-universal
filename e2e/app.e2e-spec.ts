import { UniversalCliPage } from './app.po';

describe('universal-cli App', () => {
  let page: UniversalCliPage;

  beforeEach(() => {
    page = new UniversalCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
