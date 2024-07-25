import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Total from "./components/Total/Total"

const App = () => {

  const courseContent = [
    { title: 'Fundamentals of React', exercises: 10 },
    { title: 'Using props to pass data', exercises: 7 },
    { title: 'State of a component', exercises: 14 }
  ];

  const sumExercisesCourse = courseContent.reduce((total, course) => total + course.exercises, 0);

  return (
    <div>
      <Header course='Half Stack application development' />
      <Content courseInfo={courseContent} />
      <Total total={sumExercisesCourse} />
    </div>
  )
}

export default App