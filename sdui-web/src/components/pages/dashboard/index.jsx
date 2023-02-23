import React from "react";
import BuildComponents from "../../templates/Components";
import { json } from '../../../core/server';


const RenderElements = (json) => {
  console.log(json);
  return json.map((block) => BuildComponents(block));
};

function Dashboard() {

  const [sample, setSample] = React.useState();

  return (
    <>
      {RenderElements(json)}
    </>
  );
}

export default Dashboard;
