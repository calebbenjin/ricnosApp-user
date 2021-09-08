import SideNav from '../../../components/SideNav'
import Layout from '../../../components/template/DashboardLayout'
import {
  Box,
  Checkbox,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react'
import Button from '../../../components/atoms/Buttons/FormBtn'

export default function notificationPage() {
  return (
    <Layout>
      <Flex justify='space-between' wrap='wrap'>
        <SideNav />

        <Box width={['100%', '80%']}>
          <Container maxWidth='container.md'>
            <Flex wrap='wrap' justify='space-between' my='10'>
              <Box width={['100%', '20%']}>
                <Text color='grey' fontSize='lg' mb='5'>
                  Notifications
                </Text>
                <Text fontSize='sm'>
                  For important updates regarding RICNO LOGISTICS and your
                  activities, you will recieve certain notifications.
                </Text>
              </Box>
              <Box width={['100%', '70%']} mt='5'>
                <Flex justify='space-between'>
                  <Box>
                    <Text color='grey' fontSize='lg' mb='5'>
                      Type
                    </Text>
                    <List fontSize='sm'>
                      <ListItem mb='6'>Message</ListItem>
                      <ListItem mb='6'>Order Update</ListItem>
                      <ListItem mb='6'>General Notification</ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Text color='grey' fontSize='md' mb='5'>
                      Email
                    </Text>
                    <List fontSize='sm'>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                    </List>
                  </Box>
                  <Box>
                    <Text color='grey' fontSize='md' mb='5'>
                      Mobile
                    </Text>

                    <List fontSize='sm'>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                      <ListItem mb='6'>
                        <Checkbox size='lg' colorScheme='red'></Checkbox>
                      </ListItem>
                    </List>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Container>
          <hr />

          <Container maxWidth='container.md'>
            <Text color='grey' fontSize='2xl' mb='5' mt="10">
              Real-Time Notifications
            </Text>
            <Flex alignItems='center' justify='space-between' my="10">
              <Box>
                <Text>Enable /disable real-time notifications</Text>
              </Box>
              <Box>
                <FormControl display='flex' alignItems='center'>
                  <Switch id='email-alerts' colorScheme='red' mr="3" />
                  <FormLabel htmlFor='email-alerts' mb='2' fontWeight="normal" color='red'>
                    Try me.
                  </FormLabel>
                </FormControl>
              </Box>
            </Flex>
            <Flex alignItems='center' justify='space-between' my="10">
              <Box>
                <Text>Enable /disable sound</Text>
              </Box>
              <Box>
                <FormControl display='flex' alignItems='center'>
                  <Switch id='email-alerts' colorScheme='red' mr="3" />
                  <FormLabel htmlFor='email-alerts' mb='2' fontWeight="normal" color='red'>
                    icon
                  </FormLabel>
                </FormControl>
              </Box>
            </Flex>

            <Box textAlign="right" mt="10">
              <Button>Save Changes</Button>
            </Box>
          </Container>
        </Box>
      </Flex>
    </Layout>
  )
}
