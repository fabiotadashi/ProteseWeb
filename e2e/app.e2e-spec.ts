import { ProteseAppPage } from './app.po';

describe('protese-app App', () => {
  let page: ProteseAppPage;

  beforeEach(() => {
    page = new ProteseAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
