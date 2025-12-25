import { useState } from 'react'
import { SignedIn,SignedOut,SignInButton,UserButton,SignOutButton } from '@clerk/clerk-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignedOut>
      <SignInButton mode='modal'>
        <button>
          Sign in please
        </button>
      </SignInButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton/>
    </SignedIn>
    <SignedIn>
      <UserButton/>
    </SignedIn>
    </>
  )
}

export default App
