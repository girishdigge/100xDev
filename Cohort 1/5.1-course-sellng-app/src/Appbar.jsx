import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/admin/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + ' ' + localStorage.getItem('token'),
      },
    }).then((res) => {
      res.json().then((data) => {
        if (data.username) {
          setUserEmail(data.username);
        }
      });
    });
  }, []);

  if (userEmail) {
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
            <label>{userEmail}</label>
          </div>
          <div>
            <Button
              variant={'contained'}
              onClick={() => {
                localStorage.setItem('token', null);
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
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
}

export default Appbar;
