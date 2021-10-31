import { createContext, useState } from 'react';
import './App.css';
import { Activities } from './components/activities';
import { User } from './components/user';

export const FrequentlyContext = createContext(null);

function App() {
  const [frequencies, setFrequencies] = useState({
    daily: 'selected',
    weekly: '',
    monthly: '',
    selection: 'daily'
})
  return (
    <div className="container">
      <div className="App">
        <FrequentlyContext.Provider 
          value={{
            frequencies,
            setFrequencies
          }}>
            <User/>
            <Activities/>
        </FrequentlyContext.Provider>   
      </div>
    </div>
  );
}

export default App;
