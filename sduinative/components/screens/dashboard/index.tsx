import { json } from "../../../core/server";
import React from "react";
import BuildComponents from "../../BuildComponents";
import StackNavigations from "../../../core/navigation/stack";
import axios from "axios";

function Dashboard() {
  const [json, setJSON] = React.useState([]);

  React.useEffect(async () => {
    const server_json = await axios.get("http://localhost:3000/data");
    console.log(server_json);
    setJSON(server_json.data);
  }, []);

  const renderElements = (data) => {
    return <>{data.map((block) => BuildComponents(block))}</>;
  };
  return <>{renderElements(json)}</>;
}

export default Dashboard;
