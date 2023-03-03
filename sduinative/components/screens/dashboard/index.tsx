import {json} from '../../../core/server';
import React from 'react';
import BuildComponents from '../../BuildComponents';

function Dashboard() {
  const renderElements = data => {
    return data.map(block => BuildComponents(block));
  };

  return <>{renderElements(json)}</>;
}

export default Dashboard;
