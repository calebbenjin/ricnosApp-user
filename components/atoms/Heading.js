// import styles from '../../styles/atoms/Heading.module.css'
import React from 'react'

export default function Heading() {
  const [state, setState] = React.useState(false)
  return (
    <div>
      <h1 className={state ? "heading" : "secondary"}>Hello</h1>
    </div>
  )
}
