import React from 'react';
import '@blueprintjs/core/dist/blueprint.css';
import { connect } from 'react-redux';
import Heros from './components/heros';
import HeroDetails from './components/heroDetails';
import { herosSelector, heroSelector } from './selectors/index';
import { getHero, goBack } from './actions'


const App = props => (

  <div >
    {props.pageId === "heros" ?
      <Heros {...props} />
      : <HeroDetails {...props} />}
  </div>
);

const mapDispatchToProps = {
  getHero,
  goBack,
};

const mapStateToProps = state => ({
  ...state,
  superHeros: herosSelector(state),
  superHero: heroSelector(state)

});



export default connect(mapStateToProps, mapDispatchToProps)(App);
