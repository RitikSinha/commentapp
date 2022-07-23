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
  align-items: flex-start;
  justify-content: space-between;
`;
const Name = styled.div`
  font-size: medium;
  color: #222222;
  font-weight: 500;
  display: flex;
  gap: 5px;
`;
const Time = styled.div`
  font-size: smaller;
  color: #616161;
  font-weight: 400;
`;
const Reply = styled.div`
  font-size: smaller;
  color: #2387f1;
  font-weight: 500;
`;
const Body = styled.div`
  font-size: small;
  color: #616161;
  font-weight: 500;
`;
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
          <TitleBox>
            {" "}
            <Name>
              Ritik Sinha <Time>2 months ago</Time>{" "}
            </Name>{" "}
            <Reply>Reply</Reply>
          </TitleBox>
          <Body>Lorem ipsum dolor sit amet consectetur adipisicing.</Body>
        </Box>
      </BigBox>
    </Wrapper>
  );
};

export default Comment;
