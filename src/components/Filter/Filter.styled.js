import styled from 'styled-components';

export const LabelFilter = styled.label`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadows.text};
  display: flex;
  flex-direction: column;
`;

export const InputFilter = styled.input`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: 10px;
  box-shadow: ${p => p.theme.shadows.box};
  background-color: ${p => p.theme.colors.accent};
  margin-left: 20px;
  max-width: 300px;
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: ${p => p.theme.radii.sm};
`;
