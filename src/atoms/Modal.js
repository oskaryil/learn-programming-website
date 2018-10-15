import styled from 'styled-components';
import React, { Component } from 'react';

import Container from '../elements/Container';

class Modal extends Component {
  state = {
    isOpen: false
  }
  
  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }

}

export { Modal };

// export const Modal = styled.div`
//   height: 20rem;
//   width: 40rem;
//   margin: 0 auto;
//   align-self: center;
//   z-index: 999999;
//   background-color: white;
//   position: absolute;
//   -webkit-box-shadow: 0px 7px 144px -5px rgba(204,204,204,0.5);
//   -moz-box-shadow: 0px 7px 144px -5px rgba(204,204,204,0.5);
//   box-shadow: 0px 7px 144px -5px rgba(204,204,204,0.5);
//   opacity: 0.95;
//   border-radius: 0.5rem;
//   color: #222222;
// `;