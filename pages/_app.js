import customTheme from '../styles/theme'
import Head from 'next/head'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { AuthProvider } from '../context/AuthContext'

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .selected {
            background: #fafafa;
            color: #333;
            border-bottom: solid 6px #000;
          }
          select {
            outline: none;
            border: solid 1px #999 !important;
            color: #999 !important;
            padding: 8px;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
            width: 100%;
          }
          input {
            outline: none !important;
            border: solid 1px #999 !important;
            color: #fff;
            padding: 8px;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
            width: 100%;
            background: none !important;
          }
          input:focus {
            border: solid 1px #333 !important;
            padding-left: 1rem;
            color: #333;
          }
          input::placeholder {
            color: #999;
            font-size: 1rem;
          }
          body {
            background: #fafafa;
          }
          .container {
            width: 90%;
            margin: 1rem auto;
          }
          .justify {
            text-align: justify;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
