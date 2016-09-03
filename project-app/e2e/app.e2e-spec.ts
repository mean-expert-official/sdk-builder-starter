import { ProjectAppPage } from './app.po';

describe('project-app App', function() {
  let page: ProjectAppPage;

  beforeEach(() => {
    page = new ProjectAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
