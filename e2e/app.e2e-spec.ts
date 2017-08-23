import { PhotoGaleryPage } from './app.po';

describe('photo-galery App', () => {
  let page: PhotoGaleryPage;

  beforeEach(() => {
    page = new PhotoGaleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
