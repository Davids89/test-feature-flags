import MyComponent from './MyComponent'
import { useSearchParams } from "react-router-dom"
import { FlagsProvider } from 'flagged'
import './App.css';

let FEATURE_FLAGS = []

function App() {
  let [searchParams, setSearchParams] = useSearchParams()
  const featureFlagsToEnable = searchParams.get("feature-flags")

  FEATURE_FLAGS.push(featureFlagsToEnable)

  console.log(FEATURE_FLAGS)

  return (
    <FlagsProvider features={FEATURE_FLAGS}>
      <MyComponent />
    </FlagsProvider>
  );
}

export default App;
