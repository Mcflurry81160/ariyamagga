import React from 'react';
import './SupportUsPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class SupportUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const ChethiyaProject = () => {
      return (<div>
        <h3>Chethiya Project</h3>
        <div>description</div>
        <div>Download brochure: link</div>
      </div>);
    }

    return (
      <div>
        <p>We run multiple projects to help the community and raise awareness about the message of the Buddha.</p>
        We would love for you to be part of these projects personally.
        You can also be a part of this effort by supporting these projects financially.

        <Container>
          <Row>
            <Col><ChethiyaProject /></Col>    
          </Row>
        </Container>



      </div>
    )

  }
}