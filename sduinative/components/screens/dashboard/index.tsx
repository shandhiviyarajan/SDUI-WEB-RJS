import { json } from '../../../core/server';
import React from 'react';
import BuildComponents from '../../BuildComponents';

function Dashboard() {

    const renderElements = (json: any)=>{
      return json.map((block: any) => BuildComponents(block));
    }

  return (
  <>
   {
    renderElements(json)
   }
   </>
  )
}

export default Dashboard