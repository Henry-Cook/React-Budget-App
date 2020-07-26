import React, { useState } from "react";
import styled from "styled-components";

const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #2b2c34;
  width: 500px;
  height: 500px;
  border-radius: 2%;
  margin: 80px 0 0 100px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: #6246ea;
  color: #ffffff;
  border: 1px solid #2b2c34;
  border-radius: 15%;
`;

const SubHeading = styled.h3`
  font-size: 25px;
  margin: 0 0 15px 0;
`;

const BillForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: 2px solid #2b2c34;
  border-radius: 10%;
`;

function Controls(props) {
  const [billName, updateBillName] = useState("");
  const [company, updateCompany] = useState("");
  const [dueDate, updateDueDate] = useState("");
  const [amountDue, updateAmountDue] = useState("");

  const handleBillName = (e) => {
    updateBillName(e.target.value);
  };
  const handleCompany = (e) => {
    updateCompany(e.target.value);
  };
  const handleDueDate = (e) => {
    updateDueDate(e.target.value);
  };
  const handleAmountDue = (e) => {
    updateAmountDue(parseInt(e.target.value));
  };

  return (
    <ControlBox>
      <SubHeading>New Bill</SubHeading>
      <BillForm
        onSubmit={(e) => {
          e.preventDefault();
          props.addBill(billName, company, dueDate, amountDue);
        }}
      >
        <label htmlFor="billName">Bill Name</label>
        <Input type="text" id="billName" onChange={handleBillName} />
        <label htmlFor="company">Company</label>
        <Input type="text" id="company" onChange={handleCompany} />
        <label htmlFor="due">Due Date</label>
        <Input type="text" id="due" onChange={handleDueDate} />
        <label htmlFor="amount">Amount Due</label>
        <Input type="text" id="amount" onChange={handleAmountDue} />
        <Button type="submit">Add</Button>
      </BillForm>
    </ControlBox>
  );
}

export default Controls;
