import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {map} from 'ramda';
import { Button } from '@blueprintjs/core';

const Logo = glamorous.img({
    width: '270px',
  });
  
const StyledComponents = glamorous.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });

  const StyledHero = glamorous.div({
    borderRight: '4px solid black',
    borderLeft: '4px solid black',
    borderBottom: '4px solid black',
    borderTop: '4px solid black',  
    marginTop: '20px',
    marginRight: '20px',
    marginLeft: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    color: '#000000',
    alignContent: 'center',
    paddingTop: '20',
  });


  const Hero = ({id,name,thumbnail,getHero,isPending}) =>(  
    <StyledHero>
        <Logo alt="hero" src={`${thumbnail.path}.${thumbnail.extension}`} />
            <h3>{name}</h3>
               <Button className="pt-minimal" text="details" iconName="book" onClick={()=>{getHero(id)}} />
 
    </StyledHero>
  )

  

const Heros = ({pageId,superHeros,getHero}) =>(  
    <Fragment>
        <header style={{textAlign:'left'}}><h1>Liste des Super Héros  :  </h1> </header>

        <StyledComponents>
        {map(user => (
            <Hero key={user.id} {...user} getHero={getHero}/>
        ),superHeros)}
        </StyledComponents>
        
    </Fragment>

)
Heros.propTypes = {
    pageId: PropTypes.string,
    getHero: PropTypes.func,
    superHeros: PropTypes.array,
  };

Hero.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.object,
    getHero: PropTypes.func,

  };

export default Heros;

