import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Jumbotron, Media } from 'react-bootstrap';

/**
 * Class representing the React About Container Component.
 * @extends About
 */

class About extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {


    /* 
    Implement after passing an array of games in props:

    var games = this.props.clan.games.map((game, i) => {
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src="GAMEIMAGELINKHERE" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>
            <div>{game.title}</div>
          </Media.Heading>
        </Media.Body>
      </Media>
    });*/

    return (
      <div className='about'> 
        <Jumbotron>
          <div>{this.props.clan.description}</div>
        </Jumbotron>
        <Jumbotron>
          <h3>Games:</h3>
          <Media>
            <Media.Left align="top">
              <img width={64} height={64} src="http://www.icons101.com/icons/72/5_Simple_Games_by_Paul_Schulerr/128/Starcraft-2.png" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <div>StarCraft II</div>
              </Media.Heading>
            </Media.Body>
          </Media>
        </Jumbotron>
      </div>
    )
  }
}

export default About;

/*
avatar:
"https://avatars1.githubusercontent.com/u/30813487?v=4&s=200 (7kB)

"
createdAt:
"2017-08-21T05:10:03.000Z"
creator:
{…}
creatorId:
1
description:
"The best clan ever."
id:
1
members:
Array[0]
name:
"Mustard Tigers"
tag:
"MST"
updatedAt:
"2017-08-21T05:10:03.000Z"*/