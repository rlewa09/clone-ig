import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as ALL_ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import doesUserNameExist from '../services/firebase';

function Signup() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignup = async (event) => {
    event.preventDefault();
    const userNameExists = await doesUserNameExist(username);
    if (userNameExists.length) {
      try {
        const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password);
        await createdUserResult.user.updatedProfile({
          displayName: username
        });
        await firebase.fireStore().collection('users').add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullname,
          emailAddress: emailAddress.toLowerCase(),
          following: [].push,
          dateCreated: Date.now()
        });
        history.push(ALL_ROUTES.DASHBOARD);
      } catch (error) {
        setFullname('');
        setUsername('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setError('The user already exists. Try another name please');
    }
  };

  useEffect(() => {
    document.title = 'Signup - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="instagram" className="mt-2 w-6/12" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignup} method="POST">
            <input
              aria-label="Enter your user name"
              type="text"
              placeholder="User name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullname(target.value)}
              value={fullname}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />

            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />

            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8
            font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Have an account?{' '}
            <Link to={ALL_ROUTES.LOGIN} className="font-bold text-blue-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
