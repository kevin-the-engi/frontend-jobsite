/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

import TransferModal from './TransferModal.jsx';

const Wrapper = schema.listCard;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  ${schema.modalBackdrop}
`;

const SpacedRowDiv = styled.div`
  margin: .25vh .25vw;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0.5vh 1vw;
  color: ${schema.primary};
  font-size: 1rem;
  font-weight: bold;
`;

const Company = styled.p`
  margin: 0.25vh 1vw 0 2vw;
  font-weight: lighter;
  font-style: italic;
`;

const Text = styled.p`
  margin: 0.25vh 1vw 0 2vw;
  font-weight: lighter;
`;

const SavedJobsCard = (props) => {
  const {
    job: {
      _id, city, company, employmentType, experienceLevel, jobDescription, salary, title, workLocationType,
    },
  } = props;
  const [show, setShow] = useState('false');

  const toggleModal = (event) => {
    //event.preventDefault();
    setShow(!show);
  };

  return (
    <Wrapper onClick={toggleModal}>
      <SpacedRowDiv>
        <Title>{title}</Title>
        <Text>{`$${salary.slice(0, salary.length - 3)},${salary.slice(salary.length - 3)}`}</Text>
      </SpacedRowDiv>
      <Company>{`${company} (${city})`}</Company>
      <Text>{`${employmentType.charAt(0).toUpperCase()}${employmentType.slice(1)} / ${experienceLevel.charAt(0).toUpperCase()}${experienceLevel.slice(1)}-level / ${workLocationType.charAt(0).toUpperCase()}${workLocationType.slice(1)}`}</Text>
      <Text>{jobDescription}</Text>
      {!show
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <TransferModal jobListingId={_id} seekerId={props.seekerId ? props.seekerId : '606d2039fa660c4ce0b471fd'} toggleModal={toggleModal} tabName="saved" />
          </ModalBackground>
        ) : null}
    </Wrapper>
  );
};

export default SavedJobsCard;
