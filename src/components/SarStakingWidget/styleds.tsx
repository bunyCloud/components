import styled from 'styled-components';
import { Box } from '../Box';

export const Root = styled(Box)`
  width: 100%;
  min-width: 320px;
  position: relative;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled(Box)`
  border-radius: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg2};
  position: relative;
  overflow: hidden;
  padding: 30px;
`;
