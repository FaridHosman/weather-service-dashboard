import React from 'react';
import { InitialState } from '../../store/root-reducer';
import { useSelector } from 'react-redux';
// import { ExampleCounter } from '../../types/types';

function Count(): JSX.Element {
  const currentCount = useSelector<InitialState>(
    state => state
  ) as any;

  return (
    <div>
      <p>count:</p>
      {currentCount.exampleCounter}
    </div>
  );
}

export default Count;