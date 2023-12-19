import Tablebox from "../components/table";
import Table from "../components/leadtable";
import { useEffect } from "react";
import { Text, Button } from "@chakra-ui/react";

const Dashboard = () => {
  useEffect(() => {
    console.log("here");
  });
  return (
    <>
      <Tablebox btn_title={"Assign"} />
    </>
  );
};

export default Dashboard;
