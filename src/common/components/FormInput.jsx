import { TextField } from '@mui/material';
import styled from 'styled-components';

function FormInput({ callback, label, type, placeholder }) {
  function onFormChange(e) {
    const val = e.target.value;
    callback(val);
  }
  
  return (
    <FormWrapper>
      <TextField
        id="filled-textarea"
        label={label}
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

export default FormInput;
