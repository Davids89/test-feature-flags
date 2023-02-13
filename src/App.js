import flagsmith from 'flagsmith';
import { FlagsmithProvider } from 'flagsmith/react';
import MyComponent from './MyComponent'
import './App.css';

function App() {
  return (
    <FlagsmithProvider
      options={{
        environmentID: 'CHvS64RiCT9EkWNMbG4gvH'
        }} flagsmith={flagsmith}>
        <MyComponent />
    </FlagsmithProvider>
  );
}

export default App;
