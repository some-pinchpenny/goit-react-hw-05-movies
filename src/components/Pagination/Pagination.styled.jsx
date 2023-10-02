import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.li`
  &.active {
    background-color: #b64343;
    border-radius: 6px;
  }
`;

export const PaginationLink = styled.a`
  display: block;
  padding: 0.75rem 1rem;
  min-width: 3.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;

  &:hover {
    color: #b64343;
    background-color: white;
    font-weight: 600;
  }
`;
