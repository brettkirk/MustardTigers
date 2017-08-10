import React from 'react'
import Forum from './Forum.jsx'
import About from './About.jsx'
import Members from './Members.jsx'
import Events from './Events.jsx'
import { Switch, Route } from 'react-router-dom'

/**
 * Class representing the React Clan Container Component.
 * @extends Clan
 */

class Clan extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    var imgsrc = ""

    return (
      <div className='wrapper'>
        <main>
          <Media>
            <Media.Left align="top">
              <img width={64} height={64} src={imgsrc} />
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <div>{this.props.clan.title} </div>
                <div><i>Founded: {this.props.clan.foundDate}</i></div>
              </Media.Heading>
            </Media.Body>
          </Media>
          <Switch>
            <Route 
              exact path='/clan/:number/forum' 
              component={Forum} 
            />
            <Route 
              exact path='/clan/:number/about' 
              component={About} 
            />
            <Route 
              exact path='/clan/:number/members' 
              component={Members} 
            />
            <Route 
              exact path='/clan/:number/events' 
              component={Events} 
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Clan