import Layout from '../../components/template/DashboardLayout'
import styles from '../../styles/Showcase.module.css'
import {
  Heading,
  Box,
  Text,
  Flex,
  List,
  ListItem,
  Avatar,
  Button,
  Badge,
  Container,
} from '@chakra-ui/react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function dashboard() {
  return (
    <Layout title="Dashboard">
      <Container maxWidth='container.xl'>
        <Box className={styles.showcase}>
          <Box width={['100%', '70%']}>
            <Heading className={styles.title}>Become An Agent</Heading>
            <Text className={styles.subtitle}>
              Partner With Us And Earn By Delivering Items Going your Way.
            </Text>
            <Link href='/'>
              <Flex alignItems='center' color='red' fontWeight='bold' mt='4'>
                <BsArrowRight className={styles.icon} />
                <a>Learn More</a>
              </Flex>
            </Link>
          </Box>
        </Box>

        <Flex my='10' justify='space-between' wrap='wrap'>
          <Box
            width={['100%', '40%']}
            boxShadow='md'
            bg='white'
            borderRadius='md'
            p='5'
            mt='4'
          >
            <Heading size='sm' color='grey' mb='2'>
              Activities
            </Heading>
            <hr />
            <Box p='8' bg='black' color='white' my='6' borderRadius='md'>
              <Text>
                RNCBH985128202
                <Badge
                  variant='solid'
                  ml='3'
                  colorScheme='red'
                  fontWeight='normal'
                >
                  Active Order
                </Badge>
              </Text>
              <Heading mb='3' size='md'>
                Office Shifting{' '}
              </Heading>
              <hr />
              <Flex alignItems='center' className={styles.location} mt='6'>
                <Box className={styles.line}>
                  <Box className={styles.dotTop}></Box>
                  <Box className={styles.dotBottom}></Box>
                </Box>
                <Box>
                  <Box className={styles.from}>
                    <Text>From</Text>
                    <Text>Choba, Port Harcourt</Text>
                  </Box>
                  <Box className={styles.to} mt='8'>
                    <Text>To</Text>
                    <Text>Ketu, Lagos</Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box
              p='3'
              bg='white'
              color='grey'
              border='2px'
              borderColor='gray.200'
              my='6'
              borderRadius='md'
            >
              <Text mb='2'>
                RNCBH985128202
                <Badge variant='solid' ml='3' fontWeight='normal'>
                  Completed Order
                </Badge>
              </Text>
              <hr />
              <Heading my='2' size='md'>
                Office Shifting{' '}
              </Heading>
            </Box>
          </Box>

          <Box
            width={['100%', '55%']}
            boxShadow='md'
            bg='white'
            borderRadius='md'
            p='5'
            mt='4'
            className={styles.editCard}
          >
            <Heading size='sm' color='grey' mb='2'>
              Your Profile
            </Heading>
            <hr />

            <Flex justify='space-between' wrap='wrap'>
              <Box width={['100%', '47%']}>
                <List spacing={4} mt='8'>
                  <ListItem>
                    <Text fontSize='sm' fontWeight='bold' color='grey'>
                      Name
                    </Text>
                    <hr />
                    <Text mt='2'>John Deo</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize='sm' fontWeight='bold' color='grey'>
                      Email
                    </Text>
                    <hr />
                    <Text mt='2'>JohnDeo@gmail.com</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize='sm' fontWeight='bold' color='grey'>
                      Phone Number
                    </Text>
                    <hr />
                    <Text mt='2'>+234 9087 777609</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize='sm' fontWeight='bold' color='grey'>
                      Billing Details
                    </Text>
                    <hr />
                    <Text mt='2'>John Deo</Text>
                    <Text>
                      No 9 lacfog plaza, Kilometer 16, East west road. Choba.
                    </Text>
                    <Text mt='2'>Port Harcourt,Rivers State</Text>
                  </ListItem>
                </List>
              </Box>
              <Box width={['100%', '47%']}>
                <Flex alignItems='center' justify='center'>
                  <Box textAlign='center'>
                    <Avatar
                      size='2xl'
                      mt='10'
                      className={styles.avatar}
                      name='Segun Adebayo'
                      src='https://bit.ly/sage-adebayo'
                    />
                    <Box
                      bg='black'
                      color='white'
                      p='4'
                      borderRadius='md'
                      mt='10'
                      textAlign='left'
                    >
                      <Text>Please complete your profile Registration </Text>
                      <Link href='/dashboard/settings/'>
                        <Button colorScheme='black' mt='4' variant='outline'>
                          Edit Profile
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
