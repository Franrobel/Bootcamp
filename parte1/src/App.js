import './App.css';
import Message from './Message';
function App() {
  return (
    <div className="App">
      <Message name='John' age={45} />
      <Message name='Marty' age={19} />

    </div>
  );
}

export default App;
