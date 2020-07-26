import React from "react";
import styled from "styled-components";
import BudgetRow from "./BudgetRow";

const BudgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Heading = styled.h1`
  color: #6246ea;
  text-decoration: underline;
  text-decoration-color: #000000;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 80px;
  border-bottom: 3px solid #2b2c34;
`;
const SubHeading = styled.h3`
  color: #e45858;
  margin: 10px 0 0 0;
`;
const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  justify-content: center;
`;

function Budget(props) {
  if (props.data[0]) {
    return (
      <BudgetContainer>
        <Heading>Your Budget</Heading>
        <Row key={"01"}>
          <DataContainer key={1}>
            <SubHeading key={1}>Bill Name</SubHeading>
          </DataContainer>
          <DataContainer key={"2"}>
            <SubHeading key={2}>Company</SubHeading>
          </DataContainer>
          <DataContainer key={3}>
            <SubHeading key={3}>Due Date</SubHeading>
          </DataContainer>
          <DataContainer key={4}>
            <SubHeading key={4}>Amount Due</SubHeading>
          </DataContainer>
        </Row>

        {props.data.map((item) => (
          <Row key={"02"}>
            <BudgetRow
              billName={item.fields.BillName}
              company={item.fields.Company}
              dueDate={item.fields.DateDue}
              amount={item.fields.Amount}
              key={item.id}
            />
          </Row>
        ))}
      </BudgetContainer>
    );
  } else {
    return (
      <BudgetContainer>
        <Heading>Your Budget</Heading>
      </BudgetContainer>
    );
  }
}

export default Budget;
