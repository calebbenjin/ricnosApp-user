import Layout from "../components/template/Layout";
import Banner from "../components/organisms/Banner";
import styles from '../styles/Banner.module.css'
import contact from '../styles/Contact.module.css'
import {
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { MdPhoneAndroid } from 'react-icons/md'
import { Box, Container, Flex, FormControl, FormErrorMessage, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import Button from '../components/atoms/Buttons/FormBtn'



export default function contactPage() {
  const { register, handleSubmit, formState: { errors }} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Layout>
      <Banner className={styles.about} title=" LET’S DISCUSS RECOMMENDED SOLUTION FOR YOUR FREIGHT" des="RICNOS is committed to customer service excellence and our business is based around solid values." />

      <Box as="section" bg="red" py="20">
        <Container maxWidth='container.lg'>
          <Flex wrap="wrap">
            <Box width={['100%', '50%']} className={contact.text}>
              <Heading size="md" color="white">Get in touch</Heading>
              <Text color="white" my="4">Contact us if you need further assistance</Text>
              <Flex my="6" alignItems="center" color="white"><MdPhoneAndroid className={contact.icon} /> <Text as="p" ml="3">+234-00-000-0000</Text></Flex>
              <Flex alignItems="center" color="white"><FaEnvelope className={contact.icon} /> <Text as="p" ml="3">ricnologistics@info.com</Text></Flex>
              <Box my="6">
                <Heading size="sm" color="white" mb="2">Abuja office</Heading>
                <Flex alignItems="center" color="white">
                  <FaMapMarkerAlt />
                  <Text as="p" ml="4">kilometer 16 Lag fog Plaza </Text>
                </Flex>
              </Box>
              <Box my="6">
                <Heading size="sm" color="white" mb="2">Port Harcourt office</Heading>
                <Flex alignItems="center" color="white">
                  <FaMapMarkerAlt />
                  <Text as="p" ml="4">kilometer 16 Lag fog Plaza </Text>
                </Flex>
              </Box>
              <Box my="6">
                <Heading size="sm" color="white" mb="2">Lagos Harcourt office</Heading>
                <Flex alignItems="center" color="white">
                  <FaMapMarkerAlt />
                  <Text as="p" ml="4">kilometer 16 Lag fog Plaza </Text>
                </Flex>
              </Box>
            </Box>
            <Box width={['100%', '50%']} className={contact.form_card}>
              <Box bg="white" p="10" borderRadius="md" textAlign="right" className={contact.form}>
                <Text my="3" textAlign="left" fontSize="sm" color="grey">Fill up the form and our team will get back to you with in 24hours.</Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl isInvalid={errors.name} my="6">
                    <Input type="text" placeholder="Name" {...register('name', { required: 'Name is Empty'})} />
                    <FormErrorMessage>
                      {errors.name && errors.name.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.phone} my="6">
                    <Input type="text" placeholder="Phone Number" {...register('phone', { required: 'Phone number is Empty'})} />
                    <FormErrorMessage>
                      {errors.phone && errors.phone.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.email} my="6">
                    <Input type="text" placeholder="Email Address" {...register('phone', { required: 'Email is Empty'})} />
                    <FormErrorMessage>
                      {errors.phone && errors.phone.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.message} my="6">
                    <Textarea placeholder="Please enter details of your request" {...register('message', {required: 'Message is Empty'})} ></Textarea>
                    <FormErrorMessage>
                      {errors.phone && errors.phone.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Button type="submit">SEND</Button>
                </form>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box as="section" className={contact.section}>

      </Box>
    </Layout>
  )
}
