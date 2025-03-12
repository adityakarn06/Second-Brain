
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../components/icons/Plusicon'
import { Shareicon } from '../components/icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { useEffect, useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  const shareurl = async() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
        share: true
      }, {
        headers: {
          "Authorization": token
        }
      });
      const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
      alert(shareUrl);
    } catch (error) {
      console.error("Error sharing URL: ", error);
      alert("Error sharing URL");
    }
  };
  console.log(contents);

  return (
    <div>
      <Sidebar />
      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />
        <div className='flex justify-end gap-4'>
          <Button onClick={shareurl} startIcon={<Shareicon size='md' />} variant="secondary" size="md" text="Share brain" />
          <Button onClick={() => { setModalOpen(true) }} startIcon={<PlusIcon size='md' />} variant="primary" size="md" text="Add content" />
        </div>
        <div className='flex gap-4 flex-wrap'>
          {contents.map(({type, link, title}) => <Card
            title={title} 
            link={link} 
            type={type} 
          />)}
        </div>
      </div>
    </div>
  )
}