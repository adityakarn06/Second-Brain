
import { Button } from './components/ui/Button'
import { PlusIcon } from './components/icons/Plusicon'
import { Shareicon } from './components/icons/ShareIcon'
import { Card } from './components/ui/Card'

function App() {
  return (
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
        <Button startIcon={<Shareicon size='md' />} variant="secondary" size="md" text="Share brain" />
        <Button startIcon={<PlusIcon size='md' />} variant="primary" size="md" text="Add content" />
      </div>
      <div className='flex gap-4'>
        <Card title='Latest Tweet' link='https://x.com/adityakarn06/status/1891523918017470829' type='twitter'/>
        <Card title='YT Video' link="https://www.youtube.com/watch?v=tmITb7u662M" type='youtube'/>
        <Card title='Viral Tweet' link='https://x.com/adityakarn06/status/1892216078006112426' type='twitter'/>
      </div>
    </div>
  )
}

export default App
