"use client";

// Import the useUserAuth hook from the auth-context file in _utils
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Destructure the user, gitHubSignIn, and firebaseSignOut functions from the useUserAuth hook
  // returns the user object, a function to sign in with GitHub, and a function to sign out of Firebase
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // displays user object in the console
  console.log(user);

  return (
    <div>
      <h1>Week 9</h1>
      <p>Page content</p>
      <p>This page is unsecured.</p>
      <p>
        {/* is there a user? */}
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In</button>
        )}
      </p>
      {user && (
        <p>
          Welcome, {user.displayName}! Your email address is {user.email}. And
          you look like: <img src={user.photoURL} alt={user.displayName} />
        </p>
      )}
    </div>
  );
}
