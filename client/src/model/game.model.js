import { shape, number, string, oneOf } from 'prop-types';

export const GameModel = shape({
  //
});

export const gameModelKeys = [
  'appId',
  'url',
  'headerImage',
  'title',
  'description',
  'minInstalls',
  'score',
  'ratings',
  'reviews',
  'free',
  'developerEmail',
  'developerWebsite',
  'genre',
  'genreId',
  'released',
  'updated',
  'updatedTs',
  'status'
];

export const gameModelMainDataKeys = [
  'headerImage',
  'title',
  'score',
  'minInstalls',
  'status'
];

export const gameRowDataKeys = [
  'headerImage',
  'title',
  'score',
  'minInstalls',
  'status',
  'actions'
];
