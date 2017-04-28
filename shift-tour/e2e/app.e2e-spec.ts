import { ShiftTourPage } from './app.po';

describe('shift-tour App', () => {
  let page: ShiftTourPage;

  beforeEach(() => {
    page = new ShiftTourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
