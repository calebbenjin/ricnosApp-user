import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'
import styles from '@/styles/PinInput.module.css'

export default function PinInput() {
  const [inputState, setInputState] = useState(new Array(6).fill(''))

  const handleChange = (element, index) => {
    if(isNaN(element.value)) return false

    setInputState([...inputState.map((d, idx) => (idx === index) ? element.value : d )])

    // Focus on Next Input
    if(element.nextSibling) {
      element.nextSibling.focus()
    }

  }

  return (
    <Box className={styles.formControl}>
      {inputState.map((data, index) => (
        <Input
          className={styles.input}
          type='password'
          name='pin'
          maxLength='1'
          value={data}
          key={index}
          onChange={(e) => handleChange(e.target, index)}
          onFocus={e => e.target.select()}
        />
      ))}
    </Box>
  )
}
