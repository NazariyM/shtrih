import owlCarousel from 'owl.carousel';
import slick from 'slick-carousel';
import svg4everybody from 'svg4everybody';
import dotdotdot from 'dotdotdot';
import objectFitImages from 'object-fit-images';

import './components/sliders';
import './helpers';
import './common';

svg4everybody();

const objFitImg = $('.obj-fit');
objectFitImages(objFitImg);