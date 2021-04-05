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
        <h4>Chethiya Project</h4>
        <div className="project-image">image here</div>
        <div>This is a small description about the project</div>
        <div className="project-bank-details-section">
          <div className="project-sub-title">Bank A/C details:</div>
          <div className="project-bank-details">
            <div>Bank: Bank Of Ceylon</div>
            <div>Branch: abc</div>
            <div>A/C: 71547991</div>
          </div>
        </div>
        <div className="project-sub-title">Download brochure <a href="https://ariyamaggasenasuna.blob.core.windows.net/project-chethiya/CamScanner 03-28-2021 12.25.pdf">here</a></div>
      </div>);
    }

    return (
      <div>
        <p>We run multiple projects to help the community and raise awareness about the message of the Buddha.</p>
        We would love for you to be part of these projects personally.
        You can also be a part of this effort by supporting these projects financially.

        <Container className="project-container">
          <Row>
            <Col><ChethiyaProject /></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    )

  }
}