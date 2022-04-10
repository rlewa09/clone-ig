import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import FirebaseContext from '../context/firebase';

function Login() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone app" />
      </div>
      <div className="flex flex-col w-2/5">
        <p>This is the form</p>
      </div>
    </div>
  );
}

export default Login;
