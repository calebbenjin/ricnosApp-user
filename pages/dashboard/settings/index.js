import SideNav from '../../../components/SideNav'
import {
  Box,
  Flex,
  Container,
  Text,
  Avatar,
  AvatarBadge,
  FormLabel,
  FormControl,
  Input,
} from '@chakra-ui/react'
import Layout from '../../../components/template/DashboardLayout'
import styles from '../../../styles/Settings.module.css'
import { BsPencil } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import Button from '../../../components/atoms/Buttons/FormBtn'

export default function settingsPage() {
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
      <Flex justify='space-between' wrap='wrap'>
        <SideNav />

        <Box width={['100%', '80%']} className={styles.profileSetting}>
          <Container maxWidth='container.md'>
            <Text color='grey' fontSize='lg' my='10'>
              Profile
            </Text>

            <Box className={styles.form}>
              <Box textAlign='center' className={styles.avatarBox}>
                <Avatar
                  size='2xl'
                  mt='10'
                  className={styles.avatar}
                  name='Segun Adebayo'
                  src='https://bit.ly/sage-adebayo'
                >
                  <AvatarBadge
                    className={styles.avatarBadge}
                    boxSize='0.8em'
                    borderRadius='md'
                    bg='red.500'
                  >
                    {' '}
                    <BsPencil color='white' fontSize='1.5rem' />{' '}
                  </AvatarBadge>
                </Avatar>
              </Box>

              <Box my="20">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex wrap='wrap' justify='space-between' mt='10'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>
                          Firstname
                        </FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='Name'
                          {...register('name')}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>
                          Lastname
                        </FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='Lastname'
                          {...register('lastname')}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>
                          Phone
                        </FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='+234 810-000-0000'
                          {...register('phone')}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>
                          Email Address
                        </FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='Example@mail.com'
                          {...register('email')}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Box mb='4' width={['100%']}>
                    <FormControl>
                      <FormLabel fontWeight='normal'>
                        Address 1
                      </FormLabel>
                      <Input
                        borderColor='grey'
                        type='text'
                        size='lg'
                        placeholder='Address 1'
                        {...register('address')}
                      />
                    </FormControl>
                  </Box>
                  <Box mb='4' width={['100%']}>
                    <FormControl>
                      <FormLabel fontWeight='normal'>
                        Address 2
                      </FormLabel>
                      <Input
                        borderColor='grey'
                        type='text'
                        size='lg'
                        placeholder='Address 2 (Optional)'
                        {...register('address')}
                      />
                    </FormControl>
                  </Box>

                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>City</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='City'
                          {...register('city')}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>State</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='State'
                          {...register('state')}
                        />
                      </FormControl>
                    </Box>
                  </Flex>
                  <Flex wrap='wrap' justify='space-between'>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>Zip Code</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='Zip Code'
                          {...register('zipcode')}
                        />
                      </FormControl>
                    </Box>
                    <Box mb='4' width={['100%', '47%']}>
                      <FormControl>
                        <FormLabel fontWeight='normal'>Country</FormLabel>
                        <Input
                          borderColor='grey'
                          type='text'
                          size='lg'
                          placeholder='Country'
                          {...register('country')}
                        />
                      </FormControl>
                    </Box>
                  </Flex>

                  <Box textAlign='right' my='10'>
                    <Button title='Save' />
                  </Box>
                </form>
              </Box>
            </Box>
          </Container>
        </Box>
      </Flex>
    </Layout>
  )
}
