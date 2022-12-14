type Props = {
    title : string
}

const Title = ({title}: Props) => {
  return (
    <h1 className='text-5xl font-bold font-mono'>{title}</h1>
  )
}

export default Title