import * as React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { AddonAfter, AddonBefore, ErrorText, InputWrapper, StyledInput } from './styles';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = (props) => {
  const { label, addonLabel, addonAfter, addonBefore, error, showErrorMessage = true, ...rest } = props;

  return (
    <Box>
      <Box display="flex" justifyContent={label ? 'space-between' : 'flex-end'}>
        {label && <Text color="text4">{label}</Text>}
        {addonLabel && addonLabel}
      </Box>
      <InputWrapper>
        {addonBefore && <AddonBefore>{addonBefore}</AddonBefore>}
        <StyledInput {...(rest as any)} />
        {addonAfter && <AddonAfter>{addonAfter}</AddonAfter>}
      </InputWrapper>
      {showErrorMessage && <ErrorText>{error}</ErrorText>}
    </Box>
  );
};

export default TextInput;
