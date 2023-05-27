import './App.css';
import Routes from './components/Routes';

// we can use useContext so our children components can have access to same state without having
// to pass props to all components
function App() {
  return (
    <div className="App">
    <Routes />
    </div>
  );
}

export default App;
