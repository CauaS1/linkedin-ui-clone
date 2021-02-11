import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';



const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars.githubusercontent.com/u/56549728?s=460&u=b6a4d674674957ceda6026952be8c7f612f04626&v=4" />
      <SearchInput placeholder="Search" />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;