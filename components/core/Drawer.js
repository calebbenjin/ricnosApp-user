import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import styled from 'styled-components'
import styles from '../../styles/Drawer.module.css'
import Link from 'next/link'
import menuItems from '../localData/nav.data'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react'

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaInstagram />,
  },
  {
    path: '/',
    icon: <FaLinkedinIn />,
  },
]

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box className={styles.drawer}>
        <IoMdMenu onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <MenuLink>
              {menuItems.map((item, i) => (
                <Link href={item.path} key={i}>
                  <a>{item.label}</a>
                </Link>
              ))}
            </MenuLink>
          </DrawerBody>

          <DrawerFooter>
            <MenuFooter>
              <MenuSocial>
                {social.map((socialItem, i) => (
                  <Box as='span' key={i} className='icon'>
                    <Link href={socialItem.path}>{socialItem.icon}</Link>
                  </Box>
                ))}
              </MenuSocial>
            </MenuFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const MenuLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  a {
    font-size: 16px;
    font-weight: 700;
    /* padding-top: 2rem;
    padding-bottom: 1rem; */
    cursor: pointer;
    border-bottom: 1px solid #e8e5e5;
    transition: all 0.25s;
    &:hover {
      color: #fff;
    }
    &.active {
      color: red;
    }
  }
`

const MenuFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const MenuSocial = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 1.5rem;
    margin-right: 2rem;
    transition: all 0.25s;
    cursor: pointer;
    &:last-child {
      margin-right: '0';
    }
    &:hover {
      color: blue;
    }
  }
`
