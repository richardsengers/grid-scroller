export class ImageList {

  list: Image[] = [];
  total = 0;

  constructor(images?: Image[]) {
    if (images) {
      for (let i = 0; i < 500; i++) {
        images.forEach(image => this.list.push(new Image(image)));
      }
    }


    this.total = this.list.length;
  }
}

export class Image {
  title: string;
  description: string;
  url: string;

  constructor(image) {
    for (const i in image) {
      if (image.hasOwnProperty(i)) {
        this[i] = image[i];
      }
    }
  }
}
