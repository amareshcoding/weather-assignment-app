import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 30px;
  border: 2px dashed black;
  border-radius: 15px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Box1 = styled.div`
  margin: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid #413f3f;
  border-radius: 20px;
`;

export const Box2 = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
export const Box3 = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
export const Box4 = styled.div`
  width: 190px;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 5px;
  border-bottom: 2px dashed #272727;
`;

export const Button = styled.button`
  background: teal;
  color: white;
  border: 2px solid black;
  font-size: 18px;
  border-radius: 20px;
`;

export const Input = styled.input`
  width: 130px;
  padding: 8px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #333;
  background-color: #ebe8e8;
  border-bottom: 2px dashed;
  border-radius: 2px;
`;

export const Heading = styled.h1`
  text-align: center;
  margin: 1rem;
`;

export const Text1 = styled.h4`
  margin: 0px;
  font-size: large;
  color: #272727;
`;

export const Text2 = styled.p`
  font-size: medium;
  color: #413f3f;
  margin: 0px;
`;

export const Text3 = styled.h1`
  font-size: 50px;
  color: #272727;
  margin: 0px;
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
`;
