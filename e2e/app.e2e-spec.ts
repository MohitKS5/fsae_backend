import { FsaePage } from './app.po';

describe('fsae App', () => {
  let page: FsaePage;

  beforeEach(() => {
    page = new FsaePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
