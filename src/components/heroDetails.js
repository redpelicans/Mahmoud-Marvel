import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Button } from '@blueprintjs/core';

const Logo = glamorous.img({
    height: '200px',
});
const StyledComponentsColumn = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: '20px',
    paddingTop: '20px'

});


const HeroDetails = ({ superHero, goBack }) => (
    <Fragment>
        <header style={{ textAlign: 'left' }}><h1>Fiche Identité :  </h1> </header>
        <StyledComponentsColumn>
            <Button className="pt-minimal" text="goBack" onClick={() => { goBack() }} />
            <Logo alt="hero" src={`${superHero.thumbnail.path}.${superHero.thumbnail.extension}`} />
            <h2>
                {superHero.name} {superHero.description}
            </h2>
            <h3>Comics:</h3>
            {superHero.comics.items.map(element => <p key={element.resourceURI} >{element.name} </p>)}
            <h3>Series:</h3>
            {superHero.series.items.map(element => <p key={element.resourceURI} >{element.name} </p>)}
        </StyledComponentsColumn>
    </Fragment>
)
HeroDetails.propTypes = {
    superHero: PropTypes.object,
    goBack: PropTypes.func

}


export default HeroDetails;