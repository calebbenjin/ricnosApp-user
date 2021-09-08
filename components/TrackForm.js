import { Box, Input, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import styles from '../styles/trackForm.module.css'
import Button from './atoms/Buttons/FormBtn'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function TrackForm({ bg }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = (data) => {
    console.log(data)
    router.push('/tracking')
  }

  return (
    <Box className={styles.trackForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            id="trackingnumber"
            placeholder='Enter tracking ID'
            bg={bg}
            size='lg'
            {...register('trackingnumber', { required: 'Track number is Empty' })}
          />
        <Button>Track item</Button>
      </form>
    </Box>
  )
}
