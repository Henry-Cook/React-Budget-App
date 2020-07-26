import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  color: #e45858;
`;

function Total(props) {
  let count = 0;
  props.data.map((item) => {
    count += item.fields.Amount;
  });

  console.log(props.data);
  return (
    <div>
      <Heading>Total : ${count}</Heading>
    </div>
  );
}

export default Total;
