import React from 'react';
import styled from 'styled-components';

import SeekerTile from './SeekerTile.jsx';

const ResultsWrapper = styled.div`
  width: 95%;
  height: 97%;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  @media (min-width: 768px) {
    width: 35%;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 5%;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 2.5rem;
`;

const ListWrapper = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  ::-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListSeekerResults = ({ toggleModal, jobSeekers, getResumeToDisplay }) => (
  <ResultsWrapper>
    <Header>{`Potential Hires Found: ${jobSeekers.length}`}</Header>
    <ListWrapper>
      <List>
        {jobSeekers.map((seeker) => (
          <SeekerTile
            key={seeker.phone}
            seeker={seeker}
            toggleModal={toggleModal}
            getResumeToDisplay={getResumeToDisplay}
          />
        ))}
      </List>
    </ListWrapper>
  </ResultsWrapper>
);

export default ListSeekerResults;
