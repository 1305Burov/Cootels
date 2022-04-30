import * as flsFunc from './moduls/func.js';
import accordion from './moduls/accordion.js';

flsFunc.isWebp();
accordion();

import Swiper, { Navigation, Pagination } from 'swiper';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });