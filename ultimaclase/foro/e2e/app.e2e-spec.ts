import { ForoPage } from './app.po';

describe('foro App', function() {
  let page: ForoPage;

  beforeEach(() => {
    page = new ForoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
