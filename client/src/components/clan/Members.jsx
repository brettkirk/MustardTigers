import React from 'react';
import MemberEntry from './MemberEntry.jsx';
import { Switch, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

/**
 * Class representing the React Members Container Component.
 * @extends Members
 */

class MemberEntry extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    var members = this.props.clan.members.map((member, i) => {
      return <MemberEntry member={member} key={i} />;
    });

    return (
      <Grid>
        <h4>{this.props.clan.clanName}</h4>
        <p>{this.props.clan.members.length} Members</p>
        <Row>
          {members}
        </Row>
      </Grid>
    );
  }
}

export default MemberEntry;