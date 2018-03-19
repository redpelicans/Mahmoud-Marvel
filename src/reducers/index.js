import { HEROS_LOADED, HERO_LOADED, BACK_TO_HEROS } from "../actions/index";


export default (state, action = {}) => {
    switch (action.type) {
        case HEROS_LOADED: {
            return { ...state, superHeros: action.payload.data }
        }
        case HERO_LOADED: {
            return { ...state, superHero: action.payload.data, pageId: "hero" }
        }
        case BACK_TO_HEROS: {
            return { ...state, pageId: "heros" }

        }
        default:
            return state;

    }
};