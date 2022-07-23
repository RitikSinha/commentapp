import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
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
`;
const Upvote = styled.div``;
const Box = styled.div`
  display: flex;
  flex-direction: column;
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
      <Box>
        <TitleBox></TitleBox>
        <Body>Lorem ipsum dolor sit amet consectetur adipisicing.</Body>
      </Box>
    </Wrapper>
  );
};

export default Comment;
