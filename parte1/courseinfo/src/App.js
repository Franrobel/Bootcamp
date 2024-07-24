import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Total from "./components/Total/Total"

const App = () => {
   
const courseContent = { 
  part1 : {title: 'Fundamentals of React', exercises: 10},
  part2 : {title: 'Using props to pass data', exercises: 7},
  part3 : {title: 'State of a component', exercises: 14}
};

const sumExercisesCourse = courseContent.part1.exercises + courseContent.part2.exercises + courseContent.part3.exercises;
 
return (
    <div>
      <Header course = 'Half Stack application development'/>
      <Content part = {courseContent.part1.title} exercises = {courseContent.part1.exercises} />
      <Content part = {courseContent.part2.title} exercises = {courseContent.part2.exercises}/>
      <Content part = {courseContent.part3.title} exercises = {courseContent.part3.exercises}/>
      <Total total={sumExercisesCourse}/>  
    </div>
  )
}

export default App