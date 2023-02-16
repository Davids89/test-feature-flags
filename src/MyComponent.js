import { useFeature } from 'flagged';

function MyComponent() {
  const hasTestFeatureFlag = useFeature('test')

  return (
    <>
      { hasTestFeatureFlag ? (
        <span>Special greeting for you, Jedi</span>
      ): (
        <span>Jedi? What is a Jedi?</span>
      )}
    </>
  )
}

export default MyComponent