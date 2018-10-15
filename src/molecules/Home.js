import React, { Component } from 'react';
import Container from '../elements/Container';
import { H1, H2, H4, Row, Column, Image, MainEventButton, Modal } from '../atoms';
import slackIcon from '../assets/slack-icon.png';

class Home extends Component {
  state = {};

  openModal = () => this.setState({ isVisible: true });

  render() {
    const { isVisible } = this.state;

    return (
      <Container>
        <Modal><H2>Join now</H2></Modal>
        <Row>
          <Column span="12">
            <Image centered maxWidth="130" src={slackIcon} />
          </Column>
        </Row>
        <Row>
          <Column span="12" className="home-title">
            <H1 textAlign="center">LEARN PROGRAMMING</H1>
          </Column>
        </Row>
        <Row>
          <Column span="12">
            <H4 textAlign="center" className="home-subtitle">
              A slack channel dedicated to helping others learn to program. Chat with peers and
              mentors to learn more about programming, and have a good time. All are welcome
              regardless of skill level, programming language, or age! Learn, discuss and connect.
              Join now.
            </H4>
          </Column>
        </Row>
        <Row>
          <Column span="12">
            <H4 textAlign="center">
              Already have an acoount?
              <a
                style={{ color: '#fff', marginLeft: '5px' }}
                target="_blank"
                href="https://learn-programming.slack.com/"
              >
                Sign in here
              </a>
            </H4>
          </Column>
        </Row>
        <Row>
          <Column span="12">
            <MainEventButton centered>Join 150 members now</MainEventButton>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Home;
