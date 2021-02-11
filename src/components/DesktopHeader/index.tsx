import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon
} from './styles';


const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Search" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Home</span>
            </button>

            <button>
              <NotificationsIcon />
              <span>Notifications</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars.githubusercontent.com/u/56549728?s=460&u=b6a4d674674957ceda6026952be8c7f612f04626&v=4" />
              <span>
                Me <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;