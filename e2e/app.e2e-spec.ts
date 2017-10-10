import { Ng4FormsReactivePage } from './app.po';

describe('ng4-forms-reactive App', () => {
  let page: Ng4FormsReactivePage;

  beforeEach(() => {
    page = new Ng4FormsReactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
