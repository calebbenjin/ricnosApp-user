import { useState, useContext, useEffect } from 'react'
import Layout from '../components/template/Layout'
import Link from 'next/link'
import { BsEye } from 'react-icons/bs'
import loginStyle from '../styles/Login.module.css'
import { useRouter } from 'next/router'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Container,
  InputGroup,
  InputRightElement,
  Flex,
  Checkbox,
  Spacer,
  Heading,
  Text,
} from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'
import Button from '../components/atoms/Buttons/FormBtn'
import AuthContext from '../context/AuthContext'
import Loading from '../components/atoms/Loading'

export default function loginPage() {
  const {login, isError, isLoading } = useContext(AuthContext)
  const [isLoader, setIsLoader] = useState(false)

  // useEffect(() => error && toast.error(error))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const router = useRouter()
  
  useEffect(() => isError && toast.error(isError))

  const onSubmit = (data, e) => {
    e.preventDefault()
    const {email, password} = data
    // console.log(data)
    // router.push('/dashboard')
    login({email, password})
  }

  return (
    <Layout>
      <Box className={loginStyle.cardBg}>
        {/* <Banner className={styles.about} /> */}
        <ToastContainer />
        <Box className={login.form}>
          <Container maxWidth='container.xl'>
            <Box width={['100%', '50%']}></Box>
            <Box>
              <Heading mt='20' mb='10' size='lg'>
                Login
              </Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel fontWeight='normal'>Email</FormLabel>
                  <input
                    type='email'
                    id='email'
                    placeholder='Enter Email'
                    {...register('email', { required: 'Email is required' })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password} my='5'>
                  <FormLabel fontWeight='normal'>Password</FormLabel>
                  <InputGroup>
                    <input
                      pr='2rem'
                      id='password'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      {...register('password', {
                        required: 'Password is Required',
                      })}
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
                    <Checkbox isRequired={true} colorScheme='red'>
                      Remember me
                    </Checkbox>
                    <Spacer />
                    <Link href='/forgetpassword'>Forget Password?</Link>
                  </Flex>
                </FormControl>
                <hr />
                <Box my='5'>
                  <Link href='/signup'>Don't have an account? Signup</Link>
                </Box>

                <Button
                  type='submit'
                  
                >
                  {isLoading ? 'Login....' : 'Login'}
                </Button>
                {/* <Button type="submit" color="red">LOGIN</Button> */}
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}
