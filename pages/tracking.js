import { useState } from 'react'
import Layout from '../components/template/Layout'
import Link from 'next/link'
import TrackForm from '../components/TrackForm'
import { Container, Heading, Text, Flex, Box } from '@chakra-ui/react'
import styled from 'styled-components'
import { GoCheck } from 'react-icons/go'
import { FaLongArrowAltRight } from 'react-icons/fa'
import AccordonComp from '../components/atoms/Accordon'
import Button from '../components/atoms/Buttons/FormBtn'

const shippingData = {
    id: 1,
    userName: 'Joseph',
    location: 'April, 14 2021 16:10 Local time | LAGOS',
    trackingCode: '7302559294',
    from: 'Choba Port Harcourt',
    to: 'Ikeji Lagos',
    items: [
      {id: 1, name: 'Shoe', quantity: 2},
      {id: 2, name: 'Hands Bag', quantity: 1},
      {id: 3, name: 'Books', quantity: 5},
      {id: 4, name: 'Laptop', quantity: 4},
    ],
    shippments: [
      {
        id: 1,
        date: "April, 14 2021",
        time: "16:10",
        status: "Delivered"
      },
      {
        id: 2,
        date: "April, 14 2021",
        time: "16:10",
        status: "Delivered"
      },
      {
        id: 3,
        date: "April, 14 2021",
        time: "16:10",
        status: "Delivered"
      }
    ]
  }

export default function TrackingPage() {
  const [shipmentData, setShipmentData] = useState(shippingData)
  const [isLoading, setIsLoading] = useState(true)

  const { userName, trackingCode, location, from, to, items } = shipmentData 

  return (
    <Layout>
      <Div>
        <Container maxWidth='container.md'>
          <Heading textAlign='center' fontWeight='normal' >TRACK:EXPRESS</Heading>
          <TrackForm bg="white" />

          {isLoading ? 
            <DisplayCard>
            {shipmentData ? <>
              <Flex>
                <GoCheck className="icon" color="green" />
                <div>
                  <Heading color="green" size="md">
                    Delivered signed by: {userName}
                  </Heading>
                  <Text as="p" mt="2" color="grey">{location}</Text>
                </div>
              </Flex>
              <Box display="flex">
                <Line></Line>
                <Line></Line>
                <Line></Line>
              </Box>
            
            <Box>
              <Text as="p" mt="5" color="grey">This shipment is handled by: Ricnos Logistics</Text>
              <Text as="p" color="grey">Tracking Code: {trackingCode}</Text>
              <Heading color="red" size="sm" my="10" display="flex" alignItems="center"><span>{from}</span> <FaLongArrowAltRight style={{marginLeft: '1rem', marginRight: '1rem', fontSize: '1.5rem'}} /> <span>{to}</span></Heading>
            </Box>

            <Box>
              <Button>Proof of delivery</Button>
            </Box>

            <AccordonComp title="More Shippment Details" >
              <Text fontSize="xl" mb="4">Tracking Code: {trackingCode}</Text>
              <hr />

              <Box mt="5">
                <Flex justify='space-between' mb="5" alignItems='center'>
                  <Box width={['50%']}>
                    <Text fontWeight="bold">Items</Text>
                  </Box>
                  <Box width={['50%']}>
                    <Text fontWeight="bold">Quantity</Text>
                  </Box>
                </Flex>
                {items && items.map((item) => (
                  <Flex key={item.id} mb="2" justify='space-between' alignItems='center'>
                    <Box width={['50%']}>
                      <Text>{item.name}</Text>
                    </Box>
                    <Box width={['50%']}>
                      <Text>{item.quantity}</Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </AccordonComp>
            <AccordonComp title="All Shippment Updates" >
              <FlexContainer>
                <DateBox>
                  <Text fontSize="sm" fontWeight="bold">Wednesday</Text>
                  <Text fontSize="xl">April, 14 2021</Text>
                  <Text fontSize="sm" mt="2" color="green">16:10 Local time  |  Delivered - Signed for by: Joseph Benyako</Text>
                </DateBox>
                <DateBox>
                  <Text fontSize="sm" fontWeight="bold" color="grey" mt="5">Tuesday</Text>
                  <Text fontSize="xl">April, 14 2021</Text>
                  <Text fontSize="sm" mt="3" color="grey">12:08 Local time  |  Forwarded for delivery</Text>
                  <div>
                    <Text color="grey" mt="4" fontSize="sm" fontWeight="bold">PORT HARCOURT - LAGOS</Text>
                    <Text fontSize="sm" color="grey">10:47 Local time  |  Arrived at Delivery Facility in PORT HARCOURT - LAGOS</Text>
                  </div>
                  <div>
                    <Text color="grey" mt="4" fontSize="sm" fontWeight="bold">PORT HARCOURT - LAGOS</Text>
                    <Text fontSize="sm" color="grey">10:47 Local time  |  Arrived at Delivery Facility in PORT HARCOURT - LAGOS</Text>
                  </div>
                  <div>
                    <Text color="grey" mt="4" fontSize="sm" fontWeight="bold">PORT HARCOURT - LAGOS</Text>
                    <Text fontSize="sm" color="grey">10:47 Local time  |  Arrived at Delivery Facility in PORT HARCOURT - LAGOS</Text>
                  </div>
                </DateBox>
                <DateBox>
                  <Text fontSize="sm" fontWeight="bold" color="grey" mt="5">Tuesday</Text>
                  <Text fontSize="xl">April, 14 2021</Text>
                  <Text fontSize="sm" mt="3" color="grey">12:08 Local time  |  Forwarded for delivery</Text>
                  <div>
                    <Text color="grey" mt="4" fontSize="sm" fontWeight="bold">PORT HARCOURT - LAGOS</Text>
                    <Text fontSize="sm" color="grey">10:47 Local time  |  Arrived at Delivery Facility in PORT HARCOURT - LAGOS</Text>
                  </div>
                  <div>
                    <Text color="grey" mt="4" fontSize="sm" fontWeight="bold">PORT HARCOURT - LAGOS</Text>
                    <Text fontSize="sm" color="grey">10:47 Local time  |  Arrived at Delivery Facility in PORT HARCOURT - LAGOS</Text>
                  </div>
                  <div>
                    <Text color="grey" mt="4" fontSize="sm" fontWeight="bold">PORT HARCOURT - LAGOS</Text>
                    <Text fontSize="sm" color="grey">10:47 Local time  |  Arrived at Delivery Facility in PORT HARCOURT - LAGOS</Text>
                  </div>
                </DateBox>
              </FlexContainer>
            </AccordonComp>

            </> : <Heading textAlign="center">NO Shippment...</Heading>}
            
          </DisplayCard>
          : 
          <DisplayCard>
            <Heading textAlign='center'>Please wait data is Loading...</Heading>
          </DisplayCard>
          }

          <Text color="grey" textAlign="center">If you would prefer to speak to someone personally about the location of your shipment, please contact Ricnos logistics <Link href="/"><a>Customer Service</a></Link></Text>
        </Container>
      </Div>
    </Layout>
  )
}

const Div = styled.div`
  margin: 10rem 0;

  a {
    color: red;
    text-decoration: none;
  }

  .icon {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    .icon {
      font-size: 3.5rem;
    }
  }
  
`;

const DisplayCard = styled.div`
  margin: 5rem 0;
  padding: 1rem;
  background: #fff;

  @media screen and (min-width: 1024px) {
    padding: 3rem;
    margin: 5rem 0;
    background: #fff;
  }
`;

const FlexContainer = styled.div`
  
`;
const DateBox = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: solid 2px #ccc;
`;


const Line = styled.div`
  width: 35%;
  height: 6px;
  margin-top: 1rem;
  margin-right: 1rem;
  background: green;
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 10px;
    margin-top: 1rem;
    margin-right: 1rem;
    background: green;
  }
`;





