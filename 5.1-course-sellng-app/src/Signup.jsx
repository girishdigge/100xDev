import { Button } from '@mui/material';

const Signup = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '400px',
          margin: '2px',
          border: '2px solid black',
        }}
      >
        Username: <input type='text' />
        <br />
        Password : <input type='password' />
        <br />
        <Button variant='contained'>Signup</Button>
      </div>
    </div>
  );
};
export default Signup;
