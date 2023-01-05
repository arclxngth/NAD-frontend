import { TextField } from '@mui/material';
import styled from 'styled-components';

function PasswordFormInput({ callback, label, type, placeholder }) {
  function onFormChange(e) {
    const val = e.target.value;
    callback(val);
  }

  return (
    <FormWrapper>
      <TextField
        id="filled-password-input"
        label={label}
        type="password"
        autoComplete="current-password"
        variant="filled"
        sx={{
          backgroundColor: "var(--white)",
          borderRadius: "5px",
          fontFamily: "Rubik",
          "&:hover": {
              border: "1px solid var(--input-border-hover)"
          }
        }}
        onChange={e => onFormChange(e)}
      />
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  
`;

export default PasswordFormInput;
