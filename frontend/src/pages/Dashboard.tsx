
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../components/icons/Plusicon'
import { Shareicon } from '../components/icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Sidebar />
      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />
        <div className='flex justify-end gap-4'>
          <Button startIcon={<Shareicon size='md' />} variant="secondary" size="md" text="Share brain" />
          <Button onClick={() => { setModalOpen(true) }} startIcon={<PlusIcon size='md' />} variant="primary" size="md" text="Add content" />
        </div>
        <div className='flex gap-4'>
          <Card title='Latest Tweet' link='https://x.com/adityakarn06/status/1891523918017470829' type='twitter' />
          <Card title='YT Video' link="https://www.youtube.com/watch?v=tmITb7u662M" type='youtube'/>
          <Card title='Viral Tweet' link='https://x.com/adityakarn06/status/1892216078006112426' type='twitter' />
        </div>
      </div>
    </div>
  )
}