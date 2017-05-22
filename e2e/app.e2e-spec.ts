import { FormationPage } from './app.po';

describe('formation App', () => {
  let page: FormationPage;

  beforeEach(() => {
    page = new FormationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
