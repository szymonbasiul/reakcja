import './App.css';
import './components/JakChcesz'
import JakChcesz from './components/JakChcesz';
import Dodawanie from './components/Dodawanie';
import Liczba from './components/Liczba';

function App() {
  return (
    <div className="App">
      <JakChcesz />
      <Dodawanie liczba1 = {12} liczba2 = {24} liczba3 = {9} />
      
      
      

      
    </div>
  );
}

export default App;
