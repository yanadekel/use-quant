import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 13px;
  color: rgba(242, 53, 87, 0.9);
  font-weight: 500;
  text-decoration: none;
  margin:2px;
  text-align: center;
`;

export const BoldLink = styled.a`
  font-size: 13px;
  color: rgb(242, 53, 87);
  font-weight: 700;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  margin: 2px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(40, 78, 103);
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 42px;
  margin: 2px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(40, 78, 103);
  }
`;

export const OnSubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  margin-top:5px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(40, 78, 103);
  background: linear-gradient(
    58deg,
    rgba(40, 78, 103, 1) 20%,
    rgba(18, 45, 62, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;