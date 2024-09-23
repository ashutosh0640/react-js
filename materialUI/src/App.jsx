import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

function App() {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <>
      <h1>Hello</h1>
      <Stack spacing={5} direction="row">
        <Button
          variant="text" 
          size="small"
          sx={{
            padding: 2,
            backgroundColor: 'lightblue',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: 'blue',
            },
          }}
          
        >Text</Button>
        <Button variant="contained" size="medium" startIcon={<DeleteIcon />} color="success">DELETE</Button>
        <Button variant="outlined" size='large' endIcon={<SendIcon />} color="error">SEND</Button>
      </Stack>

      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
    </>
  );
}

export default App
