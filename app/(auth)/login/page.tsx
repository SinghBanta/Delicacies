'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement login logic here
    if (!email || !password) {      
      alert("Fill all the fields")
      return
    }

    console.log('Login attempt with:', email, password)
    // Redirect to dashboard after successful login
    router.push('/')
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[350px] shadow-xl">
        <CardHeader>
          <CardTitle className='tracking-wide'>Login | Delicacies</CardTitle>
          <CardDescription>Enter your email and password to login.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email / Username</Label>
                <Input id="email" type="text" placeholder="Your email or username" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='pt-1 cursor-pointer text-xs flex justify-end hover:text-primary'>Forgot password ?</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col gap-2'>
            <Button type="submit" className="w-full">Login</Button>
          <p className='mt-2 text-muted-foreground'>Don&apos;t have an account ? <Link href="/signup" className='text-primary'>Register</Link></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}