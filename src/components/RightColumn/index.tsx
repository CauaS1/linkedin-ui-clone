import React from 'react';

import TrendingPanel from './TrendingPanel';
import LoadingTrendingPanel from '../Shimer/LoadingTrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
      <TrendingPanel />
      <TrendingPanel />
      </>
      )}

    </Container>
  );
};

export default RightColumn;
