import axios from 'axios';
import md5 from 'md5';

const ts = `${Math.round(new Date() / 1000)}`
const privateKey = "949095eef6fabc9d8df84f39d47246cd395d9f70";
const publicKey = "1b92e1024c99c7f4d791db81301e6807";
const concatin = ts.concat(privateKey, publicKey);
const hash = md5(concatin);



export const HEROS_LOADED = "HEROS_LOADED";
export const loadHeros = (data) => ({ type: HEROS_LOADED, payload: { data } })


export const getHeros = () => (dispatch) => axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    .then(({ data }) => dispatch(loadHeros(data.data.results)))
    .catch(err => console.log(err))


export const HERO_LOADED = "HERO_LOADED";
export const loadHero = (data) => ({ type: HERO_LOADED, payload: { data } })

export const getHero = (id) => (dispatch) => axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    .then(({ data }) => dispatch(loadHero(data.data.results)))
    .catch(err => console.log(err))

export const BACK_TO_HEROS = "BACK_TO_HEROS";
export const goBack = () => ({ type: BACK_TO_HEROS })
