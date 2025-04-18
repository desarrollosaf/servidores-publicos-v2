import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

interface Image {
  id: string;
  src: string;
  alt?: string;
  title?: string;
}

@Component({
    selector: 'app-owl-carousel',
    imports: [
        RouterLink,
        CarouselModule,
    ],
    templateUrl: './owl-carousel.component.html'
})
export class OwlCarouselComponent implements OnInit {

  basicExampleOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  }

  autoPlayExampleOptions: OwlOptions = {
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    }
  }

  animationFadeoutExampleOptions: OwlOptions = {
    animateOut: 'fadeOut',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
  }

  animateCssExampleOptions: OwlOptions = {
    animateOut: 'animate__animated animate__slideOutDown',
    animateIn: 'animate__animated animate__flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
  }

  slidesStore: Image[] = [
    {
      id:'1',
      src:'https://placehold.co/400x250',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:'2',
      src:'https://placehold.co/400x250',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:'3',
      src:'https://placehold.co/400x250',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:'4',
      src:'https://placehold.co/400x250',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:'5',
      src:'https://placehold.co/400x250',
      alt:'Image_5',
      title:'Image_5'
    },
    {
      id:'6',
      src:'https://placehold.co/400x250',
      alt:'Image_6',
      title:'Image_6'
    },
    {
      id:'7',
      src:'https://placehold.co/400x250',
      alt:'Image_7',
      title:'Image_7'
    },
    {
      id:'8',
      src:'https://placehold.co/400x250',
      alt:'Image_8',
      title:'Image_8'
    },
    {
      id:'9',
      src:'https://placehold.co/400x250',
      alt:'Image_9',
      title:'Image_9'
    },
    {
      id:'10',
      src:'https://placehold.co/400x250',
      alt:'Image_10',
      title:'Image_10'
    },
    {
      id:'11',
      src:'https://placehold.co/400x250',
      alt:'Image_11',
      title:'Image_11'
    },
    {
      id:'12',
      src:'https://placehold.co/400x250',
      alt:'Image_12',
      title:'Image_12'
    }
  ]

  constructor() {}

  ngOnInit(): void {
    
    /**
     * For RTL layout
     */
    if (document.querySelector('html')?.getAttribute('dir') === 'rtl') {
      this.basicExampleOptions.rtl = true;
      this.autoPlayExampleOptions.rtl = true;
      this.animationFadeoutExampleOptions.rtl = true;
      this.animateCssExampleOptions.rtl = true;
    }

  }

}
