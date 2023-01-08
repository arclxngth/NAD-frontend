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
          borderRadius: "10px",
          fontFamily: "Rubik",
          width: "20vw",
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
  margin-bottom: 1vw;

  width: 20vw;
`;

export default PasswordFormInput;
