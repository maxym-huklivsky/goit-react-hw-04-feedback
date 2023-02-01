import styled from '@emotion/styled';

const ReviewBtnContainer = styled.div`
  margin-left: 4px;
  display: flex;
  gap: 8px;
`;

const ReviewBtn = styled.button`
  padding: 4px 12px;

  background-color: transparent;
  border: 1px solid grey;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  transition: background-color 300ms, color 300ms;

  :hover,
  :focus {
    background-color: #008cff;
    color: white;
    border-color: transparent;
    cursor: pointer;
  }
`;

export { ReviewBtnContainer, ReviewBtn };
