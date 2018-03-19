import * as actions from '../actions';

const superHeros1= [{
    id: 11,
    name: 'hulk',
    description: 'description',
    event: 'events',
   
  },{id: 12,
    name: 'thor',
    description: 'description',
    event: 'events'
}];

const superHero1 = [{
    id: 12,
    name: 'thor',
    description: 'description',
    event: 'events'
  }]

describe('actions', () => {
    test('should load  heros', () => {

      const expectedAction = { type: 'HEROS_LOADED', payload: { data: superHeros1 } };
      expect(actions.loadHeros(superHeros1)).toEqual(expectedAction);
    });
    test('should load one hero', () => {

        const expectedAction = { type: 'HERO_LOADED', payload: { data: superHero1 } };
        expect(actions.loadHero(superHero1)).toEqual(expectedAction);
      });
  
});  