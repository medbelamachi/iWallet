import { IWalletPage } from './app.po';

describe('i-wallet App', function() {
  let page: IWalletPage;

  beforeEach(() => {
    page = new IWalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
