
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plusicon'
import { Shareicon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button startIcon={<Shareicon size='md' />} variant="primary" size="sm" text="Share" />
      <Button startIcon={<PlusIcon size='md' />} variant="secondary" size="md" text="Add content" />
    </>
  )
}

export default App
