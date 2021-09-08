import { useState } from 'react'
import Layout from "../components/template/Layout";
import Link from 'next/link'
import { BsEye } from 'react-icons/bs'
import login from '../styles/Login.module.css'
import {useRouter} from 'next/router'
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Container,
  InputGroup,
  InputRightElement,
  Flex,
  Checkbox,
  Spacer,
  Heading,
  Text
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Button from '../components/atoms/Buttons/FormBtn'

export default function loginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const router = useRouter()
  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
    router.push('/dashboard')
  }

  return (
    <Layout>
      <Box className={login.cardBg}>
        {/* <Banner className={styles.about} /> */}

        <Box className={login.form}>
          <Container maxWidth='container.xl'>
            <Box width={['100%', '50%']}></Box>
            <Box>
              <Heading mt="20" mb="10" size="lg">Login</Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel fontWeight='normal'>Email</FormLabel>
                  <Input
                    type='email'
                    id='email'
                    placeholder='Enter Email'
                    borderColor='grey'
                    {...register('email', { required: 'Email is required' })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password} my='5'>
                  <FormLabel fontWeight='normal'>Password</FormLabel>
                  <InputGroup>
                    <Input
                      borderColor='grey'
                      pr='2rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      {...register('password', { required: 'Password is Required'})}
                    />
                    <InputRightElement>
                      <BsEye onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </BsEye>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mb='5'>
                  <Flex>
                    <Checkbox isRequired={true} colorScheme='red'>Remember me</Checkbox>
                    <Spacer />
                    <Link href='/forgetpassword'>Forget Password?</Link>
                  </Flex>
                </FormControl>
                <hr />
                <Box my='5'>
                  <Link href='/signup'>Don't have an account? Signup</Link>
                </Box>

                <Button type="submit" >Login</Button>
                {/* <Button type="submit" color="red">LOGIN</Button> */}
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}
