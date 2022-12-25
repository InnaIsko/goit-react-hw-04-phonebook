import styled from 'styled-components';

export const Contact = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  /* color: ${p => p.theme.colors.primary}; */
`;

export const BtnDelite = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 20px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-shadow: ${p => p.theme.shadows.text};
  box-shadow: ${p => p.theme.shadows.box};
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.md};
  cursor: pointer;
  :hover,
  :focus {
    scale: 1.1;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
`;
