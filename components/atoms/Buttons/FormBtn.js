import styled from 'styled-components'

export default function FormBtn({ children}) {
  return (
    <Button>
      {children}
    </Button>
  )
}

const Button = styled.button`
  


  background: red;
  border: solid 1px red;
  padding: 10px 30px;
  display: block;
  color: #fff;
  margin: 0 1rem;
  display: inline;
  white-space: nowrap;
  border-radius: 6px;
  transition: all 0.4s linear;
  text-transform: uppercase;
  &:hover {
    background: darkred;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
    /* border-radius: 50%; */
  }
`
