import { QmctAppPage } from './app.po';

describe('qmct-app App', function() {
  let page: QmctAppPage;

  beforeEach(() => {
    page = new QmctAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
