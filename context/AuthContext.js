import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { API_URL } from '../lib/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const router = useRouter()

  // useEffect(() => checkUserLoggedIn(), [])

  // Resister user
  // ====================================
  const register = async (user) => {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    console.log(data)

    if(res.ok) {
      setUser(user)
      router('/dashboard/');
    } else {
      setError(data.message)
      setError(null)
    }
  }

  

  // Login user
  // =====================================
  const login = async () => {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        identifier,
        password
      })
    })
  }

  // Check if user is loged in
  // ================================================
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/user`)
    const data = await res.json()

    if(res.ok) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }

  // Logout user
  // =====================================

  // Password reset
  // =====================================

  // Track item
  // =====================================

  // Get quote
  // =====================================

  return (
    <AuthContext.Provider value="hello world">{children}</AuthContext.Provider>
  )
}

export default AuthContext
