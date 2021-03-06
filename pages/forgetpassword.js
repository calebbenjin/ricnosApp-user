// import { useState } from 'react'
import Layout from "../components/template/Layout";
// import Link from 'next/link'
// import { BsEye } from 'react-icons/bs'
import login from '../styles/Login.module.css'
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Container,
  Text,
  Heading,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Button from '../components/atoms/Buttons/FormBtn'

export default function forgetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <Box className={login.cardBg}>

        <Box className={login.form}>
          <Container maxWidth='container.xl'>
            <Box width={['100%', '50%']}></Box>
            <Box>
              <Heading mt="20" mb="10" size="lg">Forget Password</Heading>
              <Text fontSize="sm" my="10">Please Enter Your Email Address To Recieve a Verification Code.</Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email} mb="10">
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
                

                <Button type="submit">SEND</Button>
              </form>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}
