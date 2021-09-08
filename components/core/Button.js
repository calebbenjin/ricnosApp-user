// import { Button } from '@chakra-ui/react'

export function ButtonBg({ text, color, px, py, size, className }) {
  return (
    <button type="submit" size={size} px={px} py={py} className={className} fontWeight="normal">{text}</button>
  )
}


// export function ButtonBorder({ text, bg }) {
//   return (
//     <Button className={styles.btn_border} fontWeight="normal"  >
//       {text}
//     </Button>
    
//   )
// }
