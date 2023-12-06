
import './App.css';
import { Data } from './components/Data';
import { DataTwo } from './components/DataTwo';
import { QuizProvider } from './localcontext/QuizContext';

function App() {
  return (
    <div className="App">
    
    <QuizProvider>
      <Data/>
      {/* <DataTwo/> */}
    </QuizProvider>
    </div>
  );
}

export default App;
