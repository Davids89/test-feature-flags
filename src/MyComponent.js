import React, { useEffect } from 'react';
import { useFlags, useFlagsmith } from 'flagsmith/react';

function MyComponent() {
  const { hasFeature } = useFlagsmith();

  console.log(hasFeature('special_greeting'))
  return (
    <>
      { hasFeature('special_greeting') ? (
        <span>Special greeting for you</span>
      ) : (
        <span>Normal greeting for you</span> 
      )}
    </>
  )
}

export default MyComponent