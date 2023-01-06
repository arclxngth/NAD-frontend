import { Divider } from '@mui/material';

function DividerLine({ color, thic, margin }) {
  return (
    <Divider
      sx={{ 
        borderColor: color ? color : "var(--black)",
        borderBottomWidth: thic ? thic : "2px",
        margin: margin ? margin : "10px",
        background: { color }
      }}
    />
  );
} 

export default DividerLine;