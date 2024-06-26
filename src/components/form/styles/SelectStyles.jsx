import styled from 'styled-components';

export const SelectField = styled.select`
  padding: 0.25rem;
  border-radius: 4px;
  margin-right: 0.375rem;
  margin-left: 0.375rem;
  outline-color: #2384e6f5;
  border: none;
  font-size: 0.875rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Text = styled.label`
  font-size: 1rem;
  font-weight: 600;
`;
