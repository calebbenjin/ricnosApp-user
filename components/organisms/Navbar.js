import { Container, Flex, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import Logo from '../core/Logo'
import logoImage from '../../public/logo.svg'
import Drawer from '../molecules/Drawer'
import Button from '../atoms/Buttons/FormBtn'
import NavFooter from '../organisms/NavFooter'

export default function Navbar({ className }) {
  return (
    <>
      <Header className={className}>
        <Container maxWidth='container.xl' className='header'>
          <Flex>
            <Logo src={logoImage} />
            <Spacer />
            <Flex as='nav' alignItems='alignItems'>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              <Link href="/orderPickUp">
                <a>
                <Button>Request pickup</Button>
                </a>
              </Link>
            </Flex>
            <Drawer />
          </Flex>
        </Container>
        <NavFooter />
      </Header>
    </>
  )
}

const positionAnim = keyframes`
  from {
      position: fixed;
      opacity: 1;
    }

    to {
      position: absolute;
      opacity: 1;
      transition: all 0.4s ease;
    }
`

const Header = styled.header`
  color: #fff;
  padding-top: 10px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: transparent;
  transition: all 0.4s ease;
  animation: ${positionAnim} 0.4s ease;
  &.sticky {
    position: fixed;
    background-color: #333;
    /* color:  */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    padding-top: 15px;
    nav > a {
      color: #fff;
    }
  }
  nav {
    margin: auto;
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      margin-top: 1rem;
    }
    a {
      font-size: 2;
      padding-left: 4rem;
      cursor: pointer;
      line-height: 1.2;
      transition: all 0.15s;
      &:hover {
        color: red;
      }
      &.active {
        color: red;
      }
    }
  }
`
