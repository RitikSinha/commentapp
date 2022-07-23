import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;
const Avtar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #7b7979;
  flex: 1;
`;
const BigBox = styled.div`
  display: flex;
  background-color: #fff;
  padding: 15px;
`;
const Upvote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100px;
  width: 40px;
  border-radius: 40px;
  font-weight: 800;
  padding: 3px;
`;
const Icon = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  gap: 5px;
`;
const TitleBox = styled.div`
  display: flex;
`;
const Body = styled.div``;
const Comment = () => {
  return (
    <Wrapper>
      <Avtar></Avtar>
      <BigBox>
        <Upvote>
          {" "}
          <Icon> +</Icon>
          23
          <Icon>-</Icon>
        </Upvote>
        <Box>
          <TitleBox> Ritik Sinha</TitleBox>
          <Body>Lorem ipsum dolor sit amet consectetur adipisicing.</Body>
        </Box>
      </BigBox>
    </Wrapper>
  );
};

export default Comment;
