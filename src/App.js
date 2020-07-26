import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Controls from "./Controls";
import Budget from "./Budget";
import Total from "./Total";
import axios from "axios";

import "./App.css";

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

function App() {
  const [data, updateData] = useState([]);
  const [newBill, updateNewBill] = useState(0);

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios(
        `https://api.airtable.com/v0/app2yPAIMs3nDLYiM/Table%201?view=Grid%20view`,

        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateData(res.data.records);
    };
    apiCall();
  }, [newBill]);

  const addNewBill = async (billName, company, dateDue, amount) => {
    const data = await axios.post(
      `https://api.airtable.com/v0/app2yPAIMs3nDLYiM/Table%201`,
      {
        fields: {
          BillName: billName,
          Company: company,
          DateDue: dateDue,
          Amount: amount,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    updateNewBill(newBill++);
  };

  const BudgetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  `;

  if (data !== []) {
    return (
      <div>
        <Navbar />
        <MainContainer>
          <Controls addBill={addNewBill} />
          <BudgetContainer>
            <Budget data={data} key={data} />
            <Total data={data} />
          </BudgetContainer>
        </MainContainer>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <MainContainer></MainContainer>
      </div>
    );
  }
}

export default App;
