import React from "react";
import BuildComponents from "../../templates/Components";
import { json } from '../../../core/server';


const renderElements = (json) => {
  console.log(json);
  return json.map((block) => BuildComponents(block));
};

function Dashboard() {
  return (
    <>
      {renderElements(json)}
    </>
  );
}

export default Dashboard;
