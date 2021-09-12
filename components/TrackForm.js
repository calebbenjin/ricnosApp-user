import { Box, Input} from '@chakra-ui/react'
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
            id="trackID"
            placeholder='Enter tracking ID'
            size='lg'
            {...register('trackID')}
          />
        <Button>Track item</Button>
      </form>
    </Box>
  )
}
