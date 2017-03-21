import { Angular2NgrxTodosPage } from './app.po';

describe('angular2-ngrx-todos App', () => {
  let page: Angular2NgrxTodosPage;

  beforeEach(() => {
    page = new Angular2NgrxTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
