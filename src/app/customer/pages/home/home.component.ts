import { Component } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 4,
      direction: this.getDirection(),
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
      on: {
        resize: () => {
          swiper.changeDirection(this.getDirection());
        },
      },
    });

    const swiper1 = new Swiper('.swiper1', {
      slidesPerView: 6,
      direction: this.getDirection(),
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      on: {
        resize: () => {
          swiper1.changeDirection(this.getDirection());
        },
      },
    });
  }

  getDirection() {
    const windowWidth = window.innerWidth;
    const direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

}
