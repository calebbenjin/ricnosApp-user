import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '../lib/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isError, setIsError] = useState(null)
  const [isLoading, setIsLoading] = useState(null);

  const router = useRouter()

  // useEffect(() => checkUserLoggedIn(), [])

  // Resister user
  // ====================================
    const signup = async (user) => {
      console.log(user)
    }
  // const signup = async ({email, phone, password, password_confirm}) => {
  //   const res = await fetch(`${NEXT_URL}/api/register`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })

  //   const data = await res.json()

  //   console.log(data)

  //   // if(res.ok) {
  //   //   setIsLoading(true)
  //   //   setUser(user)
  //   //   router('/dashboard/');
  //   // } else {
  //   //   setIsLoading(false)
  //   //   setError(data.message)
  //   //   setError(null)
  //   // }
  // }
  

  

  // Login user
  // =====================================
  const login = async ({email, password}) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({email, password})
    })

    const data = await res.json()

    // console.log(data.message)

    if(res.ok) {
      setIsLoading(true)
      setUser(data.user)
      // router.push('/dashboard/');
    } else {
      setIsLoading(false)
      // console.log(data.message)
      setIsError(data.message)
      setIsError(null)
    }
  }

  // Check if user is logged in
  // ================================================
  // const checkUserLoggedIn = async (user) => {
  //   const res = await fetch(`${NEXT_URL}/user`)
  //   const data = await res.json()

  //   if(res.ok) {
  //     setUser(data.user)
  //   } else {
  //     setUser(null)
  //   }
  // }

  // Logout user
  // =====================================

  // Password reset
  // =====================================

  // Track item
  // =====================================

  // Get quote
  // =====================================

  return (
    <AuthContext.Provider value={{user, isError, isLoading, signup, login}}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
