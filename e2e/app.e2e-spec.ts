import { AngularJobsityAppPage } from './app.po';

describe('angular-jobsity-app App', () => {
  let page: AngularJobsityAppPage;

  beforeEach(() => {
    page = new AngularJobsityAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
