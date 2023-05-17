import { FC } from 'react'

interface GreetProps {
    name?: string
}
const Greet: FC<GreetProps> = ({name}) => {
  return (
    <>
    {`Hello ${name ? name : "Guest"}`}
    </>
  )
}

export default Greet