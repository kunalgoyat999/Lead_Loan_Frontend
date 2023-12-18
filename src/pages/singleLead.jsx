import { useEffect, useState } from "react";
import assets from "../assests";
import { Text, Button, useToast } from "@chakra-ui/react";
import Loginbox from "../components/login";
import SignupBox from "../components/Signup";
import "../assests/styles.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getSingleLead, updateLead } from "../services/api";
import 'react-toastify/dist/ReactToastify.css';

const SingleLead = () => {
  const [singleLead, setSingleLead] = useState({});
  const location = useLocation();
  const { id } = location.state;
  const [selectedOption, setSelectedOption] = useState("");
  const [remark, setRemark] = useState("");
  let token = localStorage.getItem("jwt_token");
  let toast = useToast();
  const [createTime, setCreateTime] = useState('')
  useEffect(() => {
    
    getSingleLead(token, id).then((res) => {
      console.log("single", res.data);
      setSingleLead(res.data);
      const dateObject = new Date(res.data.createdAt);

                    // Format the date and time
                    const formattedDate = dateObject.toLocaleDateString();
                    const formattedTime = dateObject.toLocaleTimeString();
                    setCreateTime(formattedDate)
    });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    // Update the state with the current input value
    setRemark(event.target.value);
  };

  const handleEditClick = (id) => {
    console.log("id", id);
    let data ={
      remark: remark,
      status: selectedOption
    }
    updateLead(token, id, data).then((res)=> {
      console.log("resspon", res)
      if(res.data == "Lead updated successfully"){
        let success = "Lead updated successfully";
            toast({
              title: `${success}`,
              status: "success",
              position: "bottom",
              isClosable: true,
            });
      }
    })
  };
  //   "id": 1,
  //   "name": "test1",
  //   "gender": "m",
  //   "phone_number": "1",
  //   "loan_amount": "",
  //   "loan_type": "",
  //   "emp_id": 1,
  //   "isAssigned": 1,
  //   "remark": [
  //       {
  //           "time": "2023-12-10T19:19:26.583Z",
  //           "message": [
  //               {
  //                   "time": "{{now}}",
  //                   "message": "Remark for Bob"
  //               }
  //           ]
  //       },
  //       {
  //           "time": "2023-12-10T19:46:28.180Z"
  //       },
  //       {
  //           "time": "2023-12-12T20:31:13+05:30",
  //           "message": "kunal"
  //       },
  //       {
  //           "time": "2023-12-17T11:46:44+05:30",
  //           "message": "kunal1"
  //       }
  //   ],
  //   "status": "PENDING",
  //   "createdAt": "2023-12-10T18:55:21.000Z",
  //   "updatedAt": "2023-12-17T06:16:44.000Z"
  // }

  return (
    <div style={{ marginTop: "90px", width: "60%", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontWeight: "bold" }}>Name: </p>
          <p>{singleLead.name}</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Gender: </p>
          <p>{singleLead.gender}</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Phone No: </p>
          <p>{singleLead.phone_number}</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Loan Amount </p>
          <p>{singleLead.loan_amount}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontWeight: "bold" }}> Loan Type </p>
          <p>{singleLead.loan_type}</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Remark </p>
          {singleLead.remark != null
            ? singleLead.remark.map((ele) =>
                //  console.log("res", ele)
                {
                  const dateObject = new Date(ele.time);

                    // Format the date and time
                    const formattedDate = dateObject.toLocaleDateString();
                    const formattedTime = dateObject.toLocaleTimeString();
                  return (
                    <p>
                      {ele.message}
                      {` (${formattedDate})`}
                    </p>
                  );
                }
              )
            : null}
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Status </p>
          <p>{singleLead.status}</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Created At </p>
          <p>{createTime}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div>
          <label style={{ fontWeight: "bold" }} htmlFor="dropdown">
            Select current status of Lead:
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">-- Choose One --</option>
            <option value="Inserted">Inserted</option>
            <option value="In Progress">In Progress</option>
            <option value="Documents">Documents</option>
            <option value="Loan Disburse">Loan Disburse</option>
          </select>
          {/* 
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )} */}
        </div>
        <div>
          <input
            placeholder="Add Remark"
            style={{ border: "1px" }}
            value={remark}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "blue",
          paddingRight: "1.5em",
          paddingLeft: "1.5em",
          paddingTop: "0.6em",
          paddingBottom: "0.6em",
          borderRadius: "0.5em",
          cursor: "pointer",
          textAlign: "center",
          width: "20%",
          
        }}
        onClick={() => handleEditClick(singleLead.id)}
      >
        <p style={{ color: "white",  }}>Save</p>
      </div>
    </div>
  );
};

export default SingleLead;
