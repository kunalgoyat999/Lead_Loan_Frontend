import Tablebox from "../components/table";
import Table from "../components/leadtable";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    console.log("here");
  }, []);
  return (
    <>
      <p>dfe</p>
      <Tablebox btn_title={"Assign"} />
    </>
  );
};

export default Dashboard;
