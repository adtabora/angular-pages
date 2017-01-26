import { AngularPagesPage } from './app.po';

describe('angular-pages App', function() {
  let page: AngularPagesPage;

  beforeEach(() => {
    page = new AngularPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
