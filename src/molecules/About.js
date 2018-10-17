import React from 'react';
import Container from '../elements/Container';
import { H1, H4, Row, Column, Image } from '../atoms';
import slackIcon from '../assets/slack-icon.png';

const About = () => (
  <Container>
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
          A slack channel dedicated to helping others learn to program. Chat with peers and mentors
          to learn more about programming, and have a good time. All are welcome regardless of skill
          level, programming language, or age! We currently have members from over 10 different
          countries from around the world, so you’ll be getting diverse opinions on matters. The
          goal is to help you learn, and learn right.
        </H4>
      </Column>
    </Row>
  </Container>
);

export default About;
