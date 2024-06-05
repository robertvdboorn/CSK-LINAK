import { registerUniformComponent } from '@uniformdev/canvas-react';
import { Hero } from './Hero/Hero';
import { Button } from './Button/Button';

registerUniformComponent({
  type: 'exampleHero',
  component: Hero,
});
registerUniformComponent({
  type: 'exampleButton',
  component: Button,
});

export { Hero, Button };
