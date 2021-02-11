import React from 'react';

import LoadingFeedShare from '../Shimer/LoadingFeedShare';
import LoadingFeedPost from '../Shimer/LoadingFeedPost';
import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ): (
          <>
      <FeedShare />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      </>
  )
}
    </Container >
  );
};

export default MiddleColumn;
