import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
  padding-top: 138px;
  padding-bottom: 48px;
`;

export const SearchbarTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: normal;
`;

export const SearchForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;

  margin-bottom: 56px;
`;

export const SearchButton = styled.button`
  border-radius: 0px 22px 22px 0px;
  background-color: #b64343;
  color: #fff;
  width: 75px;
  height: 48px;
  display: inline-block;
  box-shadow: 0px 0px 14px 1px rgba(47, 42, 42, 0.77);
  border: none;

  &:hover {
    background-color: #ee4f4f;
  }
`;

export const SearchInput = styled.input`
  border-radius: 22px 0px 0px 22px;
  box-shadow: 0px 0px 14px 1px rgba(47, 42, 42, 0.77);
  border: none;
  width: 491px;
  height: 48px;
  padding: 10px 32px;
  background-color: transparent;
  display: inline-block;
  color: #c8c5c5;
  font-size: 24px;
  line-height: 1.17;

  &::placeholder {
    color: #c8c5c5;
    font-size: 24px;
    line-height: 1.17;
  }
`;
