import { Injectable } from '@angular/core';

const ALL_IMAGE_KEYS = [
  // 'bg-olive', // Used via css background only - ignored for now
  'bonus-animation',
  'bonus-picture',
  'confetti',
  // 'heart', // Fav icon - ignored for now
  'heart-full-red',
  'heart-full-white',
  'mairie',
  'olive-branch',
  'picture-accommodation-1',
  'picture-accommodation-2',
  'picture-accommodation-3',
  'picture-accommodation-4',
  'picture-accommodation-5',
  'picture-accommodation-6',
  'picture-antibes',
  'picture-bertrands',
  'picture-bertrands-entrance',
  'picture-bertrands-pool',
  'picture-c',
  'picture-c-and-m-1',
  'picture-c-and-m-2',
  'picture-m',
  'picture-mairie',
  'picture-young-c',
  'picture-young-m',
  'sun',
  'wedding-rings'
];

const CRITICAL_IMAGE_KEYS = [
  // Header
  'wedding-rings',
  // Carousel
  'picture-c-and-m-1',
  'picture-antibes',
  'picture-c-and-m-2',
  'picture-bertrands',
  // Couple pres
  'picture-c',
  'picture-m'
];

@Injectable({ providedIn: 'root' })
export class LoadingService {

  private imagesLoaded: string[] = [];

  criticalImagesLoaded = false;
  allImagesLoaded = false;

  constructor() { }

  onImageLoaded(imageKey: string): void {
    this.imagesLoaded.push(imageKey);
    this.criticalImagesLoaded = CRITICAL_IMAGE_KEYS.every(key => this.imagesLoaded.includes(key));
    this.allImagesLoaded = ALL_IMAGE_KEYS.every(key => this.imagesLoaded.includes(key));
    if (this.criticalImagesLoaded) {
      console.log('Critical images finished loading.');
    }
    if (this.criticalImagesLoaded) {
      console.log('All images finished loading.');
    }
  }

}
