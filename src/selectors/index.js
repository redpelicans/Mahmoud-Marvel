import { createSelector } from 'reselect';


export const getAllHeros = (state) => state.superHeros
export const getHero = (state) => state.superHero


export const herosSelector = createSelector(
    getAllHeros,
    (heros) =>heros
)
export const heroSelector = createSelector(
    getHero,
    (hero) =>hero[0]
)
