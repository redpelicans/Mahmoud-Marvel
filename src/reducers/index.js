import { LOAD_HEROS, LOAD_HERO, BACK_TO_HEROS } from "../actions/index";


export default (state, action = {}) => {
    switch (action.type) {
        case LOAD_HEROS :{
            return {...state,superHeros: action.payload.data}
          }
        case LOAD_HERO:{
            return {...state,superHero: action.payload.data,pageId:"hero"}
          }
        case BACK_TO_HEROS:{
            return {...state,pageId:"heros"}

        }
      default:
       return state;

    }
};