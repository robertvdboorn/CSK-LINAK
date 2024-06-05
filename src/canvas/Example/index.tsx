import { registerUniformComponent } from '@uniformdev/canvas-react';
import { Hero } from './Hero/Hero';

registerUniformComponent({
  type: 'exampleHero',
  component: Hero,
});

export default Hero;
