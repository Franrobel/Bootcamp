
function Parts(props) {
  const { courseInfo } = props

  const parts = courseInfo.map((part) => <p>{part.title} : {part.exercises}</p>)

  return (
    <p>{parts}</p>
  )
}

export default Parts