export class ImageList {

  images: Image[] = [];

  constructor(images) {
    if (images.length) {
      images.forEach(image => this.images.push(new Image(image)));
    }
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
