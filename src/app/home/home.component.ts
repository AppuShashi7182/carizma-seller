import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

export interface ITestimonials {
  body: string,
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideIn1', [
      state('void', style({
        transform: 'translateX(100%)',
      })),
      state('*', style({
        transform: 'translateX(100)',
      })),
      transition('void => *', animate('600ms ease-out')),
    ]),
    trigger('slideIn2', [
      state('void', style({
        transform: 'translateX(100%)',
      })),
      state('*', style({
        transform: 'translateX(100)',
      })),
      transition('void => *', animate('1200ms ease-out')),
    ]),
    trigger('slideIn3', [
      state('void', style({
        transform: 'translateX(100%)',
      })),
      state('*', style({
        transform: 'translateX(100)',
      })),
      transition('void => *', animate('1800ms ease-out')),
    ]),
    trigger('slideAnimation', [
      transition('* => *', [
        style({ transform: 'translateX({{ CarCarousalDirection }}%)' }),
        animate('600ms ease-in-out')
      ])
    ])
  ],
})
export class HomeComponent {
  currentCarouselCarIndex = 0;
  CarCarousalDirection = 0; // Initial direction

  currentCarouselTestimonialIndex = 0;
  CarouselTestimonialDirection = 0;
  interval: any;
  animationState = 'void';

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.startCarCarousel();
    this.startTestimonialCarousel();
  }
  testimonials = [
    { author: 'Sam Altman',designation:'Ceo',img:'assets/img/testimonials/testimonials-1.jpg',text: 'Outstanding car-buying experience, excellent service, and unbeatable deals. Highly recommend!' },
    { author: 'Jane Doe',designation:'Ceo',img:'assets/img/testimonials/testimonials-2.jpg',text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { author: 'Jane Doe',designation:'Ceo',img:'assets/img/testimonials/testimonials-3.jpg',text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { author: 'Jane Doe',designation:'Ceo',img:'assets/img/testimonials/testimonials-4.jpg',text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { author: 'Jane Doe',designation:'Ceo',img:'assets/img/testimonials/testimonials-5.jpg',text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    // Add more testimonials as needed
  ];
  startCarCarousel() {
    setInterval(() => {
      this.next();
    }, 5000); // Adjust the interval as needed
  }
  startTestimonialCarousel() {
    setInterval(() => {
      this.nextTestimonial();
    }, 6000); // Adjust the interval as needed
  }
  images = [
    'assets/img/home-carosoul-1.png',
    'assets/img/home-carosoul-2.png',
    'assets/img/home-carosoul-3.png'
  ];
  next() {
    this.CarCarousalDirection = -100;
    this.currentCarouselCarIndex = (this.currentCarouselCarIndex + 1) % this.images.length;
  }

  nextTestimonial() {
    this.CarouselTestimonialDirection= -100; // Slide to the left
    this.currentCarouselTestimonialIndex = (this.currentCarouselTestimonialIndex + 1) % this.testimonials.length;
  }
  prevTestimonial() {
    this.CarouselTestimonialDirection= 100; 
    this.currentCarouselTestimonialIndex = (this.currentCarouselTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Adjust this value based on when you want the animation to start
    const triggerPosition = 200;

    if (scrollPosition > triggerPosition) {
      this.animationState = '*';
    } else {
      this.animationState = 'void';
    }
  }

  navigate(route:string) {
    this.router.navigate([`/${route}`]);
  }

}
