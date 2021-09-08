import React, { useState } from 'react'
import Sticky from 'react-stickynode'
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

export default function Layout({children}) {
  const [ isSticky, setIsSticky ] = useState(false)

  const handleSticky = (status) => {
    if(status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true)
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false)
    }
  };

  return (
    <main>
      <Sticky innerZ={1001} top={0} onStateChange={handleSticky}>
        <Navbar className={`${isSticky ? 'sticky' : 'unStick'}`} />
      </Sticky>
      {children}
      <Footer />
    </main>
  )
}


