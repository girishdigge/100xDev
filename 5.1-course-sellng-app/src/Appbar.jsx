import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Appbar() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/admin/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + ' ' + localStorage.getItem('token'),
      },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 4,
      }}
    >
      <div>
        <Typography variant={'h6'}>Coursera</Typography>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant={'contained'}
            onClick={() => {
              navigate('/signup');
            }}
          >
            Signup
          </Button>
        </div>
        <div>
          <Button
            variant={'contained'}
            onClick={() => {
              navigate('/signin');
            }}
          >
            Signin
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
