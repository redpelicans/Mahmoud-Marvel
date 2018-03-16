import deepFreeze from 'deep-freeze';
import reducer from '../reducers';
import * as actions from '../actions';

const superHeros1= [{
    id: 11,
    name: 'hulk',
    description: 'description',
    event: 'events',
   
  },{id: 12,
    name: 'thor',
    description: 'description',
    event: 'events',}
];

  const superHero1 = [{
    id: 12,
    name: 'thor',
    description: 'description',
    event: 'events'
  }]

describe('reducer', () => {
    test('should return superHeros', () => {
      const initilaState = { superHeros: [] };
      const expectedState = { superHeros: superHeros1 };
      deepFreeze(initilaState);
      expect(reducer(initilaState, actions.loadHeros(superHeros1))).toEqual(expectedState);
    });
    test('should return superHero Detail', () => {
        const initilaState = { superHero:[] ,pageId:"heros"};
        const expectedState = { superHero: superHero1,pageId:"hero"};
        deepFreeze(initilaState);
        expect(reducer(initilaState, actions.loadHero(superHero1))).toEqual(expectedState);
      });

      test('should go back', () => {
        const initilaState = { pageId:"hero"};
        const expectedState = { pageId:"heros"};
        deepFreeze(initilaState);
        expect(reducer(initilaState, actions.goBack())).toEqual(expectedState);
      });

  });  