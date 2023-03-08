import React from "react";
import BuildComponents from "../../BuildComponents";
import axios from "axios";

const renderElements = (json) => {
  return json.map((block) => BuildComponents(block));
};

function Dashboard() {

    const [json, setJSON] = React.useState([]);

  React.useEffect(() => {
  (async()=>{
      const server_json = await axios.get("http://localhost:3000/data");
    setJSON(server_json.data);
  })();
  }, []);
  
  return (
    <>
      {renderElements(json)}
    </>
  );
}

export default Dashboard;
