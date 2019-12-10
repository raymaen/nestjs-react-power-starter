import { shape, number, string, oneOf } from 'prop-types';

export const Pug = shape({
  name: string,
  type: oneOf(['black', 'white']),
  age: number
});
