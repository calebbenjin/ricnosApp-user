import { useState } from 'react'
import Layout from '../components/template/Layout'
import styles from '../styles/PinInput.module.css'
import login from '../styles/Login.module.css'
import { Box, Container, Text, Heading } from '@chakra-ui/react'
// import { useForm } from 'react-hook-form'
import Button from '../components/atoms/Buttons/FormBtn'

export default function signupPage() {
  const [inputState, setInputState] = useState(new Array(6).fill(''))

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    setInputState([
      ...inputState.map((d, idx) => (idx === index ? element.value : d)),
    ])

    // Focus on Next Input
    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    console.log(inputState)
  }

  return (
    <Layout>
      <Box className={login.cardBg}>
        {/* <Banner className={styles.about} /> */}

        <Box className={login.form}>
          <Container maxWidth='container.xl'>
            <Box>
              <Heading size='lg' mt='20' mb='10'>
                Verify Your Email
              </Heading>

              <Text>Please Enter The Digital Code Sent TO</Text>
              <Text color='red'>user email</Text>
              <form onSubmit={handleSubmit}>
                <Box
                  bg='white'
                  color='black'
                  borderRadius='md'
                  p={['4', '10']}
                  mt='5'
                >
                  <Text color='grey' mb='4' fontSize='sm'>
                    Enter 6-Digital Code Sent to your Email
                  </Text>

                  <Box className={styles.formControl}>
                    {inputState.map((data, index) => (
                      <input
                        className={styles.input}
                        type='password'
                        name='pin'
                        maxLength='1'
                        value={data}
                        key={index}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Button type='submit'>Resend Code</Button>
                </Box>

                <Button type='submit'>VERIFY</Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}
