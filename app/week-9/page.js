"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1>Week 9 Assignment</h1>
      {user ? (
        <button onClick={firebaseSignOut}>Sign Out</button>
      ) : (
        <div>
          <p>Sign in to access the content</p>
          <button onClick={gitHubSignIn}>Sign In with GitHub</button>
        </div>
      )}
      {user && (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-60 rounded-full"
          />
          <Link href="/week-9/shopping-list">
            Click here to view your Shopping List
          </Link>
        </div>
      )}
    </div>
  );
}
