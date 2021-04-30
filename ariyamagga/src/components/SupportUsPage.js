import React from 'react';
import './SupportUsPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class SupportUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chethiyaProjectImageurl: null
    }
  }

  componentDidMount() {
    const requestOptions = {
      crossDomain: true,
      method: 'POST',
      body: JSON.stringify({ containerName: 'project-thumbnails', imageName: 'IMG_7357.JPG' })
    }

    fetch("https://func-app-ariyamaggasenasuna.azurewebsites.net/api/GetBlobInfo", requestOptions)
      .then((response) => response.text())
      .then((responseText) => {
        this.setState({ chethiyaProjectImageurl: responseText });
        console.log("url", this.state.chethiyaProjectImageurl)});
  }

  render() {

    const ChethiyaProject = () => {
      return (<div>
        <h4>Chethiya (ඡෛත්‍ය) Project</h4>
        <div>
          <img className="project-image" alt="" src={this.state.chethiyaProjectImageurl}></img>
        </div>
        <div>In order to meet the long felt need of a Chethiya to complete the places of worship, in 2019 it was decided to build a suitably designed Chethiya. The foundation stone was laid on the 9th March 2020 and soon came to a halt due to COVID19 related restrictions. Resumption of work took place in March 2021 after a gap of one year. Finishing work including topping and unveiling of pinnacle is still to be done.</div>
        <div className="project-bank-details-section">
          <div className="project-sub-title">Bank A/C details:</div>
          <div className="project-bank-details">
            <div>Bank: Bank Of Ceylon</div>
            <div>Branch: Second City Branch, Kurunegala</div>
            <div>Bank Code: 7010</div>
            <div>Branch Code: 513</div>
            <div>Swift Code: BCEYLKLX</div>
            <div>A/C: 71547991</div>
          </div>
        </div>
        <div className="project-sub-title">Download brochure <a href="https://ariyamaggasenasuna.blob.core.windows.net/project-001-chethiya/chethiya-brochure.pdf">here</a></div>
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