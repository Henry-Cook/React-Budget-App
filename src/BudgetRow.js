import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #2b2c34;
`;
const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  justify-content: center;
`;

const BillName = styled.h4`
  color: #6246ea;
`;
const DueDate = styled.h4`
  color: #6246ea;
`;
const Company = styled.h4``;
const AmountDue = styled.h4``;

function BudgetRow(props) {
  return (
    <Row>
      <DataContainer>
        <BillName>{props.billName}</BillName>
      </DataContainer>

      <DataContainer>
        <Company>{props.company}</Company>
      </DataContainer>

      <DataContainer>
        <DueDate>{props.dueDate}</DueDate>
      </DataContainer>

      <DataContainer>
        <AmountDue>${props.amount}</AmountDue>
      </DataContainer>
    </Row>
  );
}

export default BudgetRow;
