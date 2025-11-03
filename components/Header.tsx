'use client';

import { SignedIn, SignedOut, SignInButton,  UserButton, useUser } from "@clerk/nextjs";
import Breadcrumbs from "./Breadcrumbs";

function Header() {
  const { user } = useUser();  //check for current user?

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}   

      {/* Breadcrumbs - for tracing back (kinda like filepaths)*/}
      <Breadcrumbs />

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>

    </div>
  );
  
}
export default Header