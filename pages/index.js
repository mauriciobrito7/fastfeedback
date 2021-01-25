import { useAuth } from '../lib/auth'
import { Button } from '@chakra-ui/react'

export default function Index() {
  const auth = useAuth()
  return auth.user ? (
    <div>

      <p>Email: {auth.user.email}</p>
      <Button onClick={(e) => auth.signout()}>Sign Out2</Button>
    </div>
  ) : (
    <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
  )
}