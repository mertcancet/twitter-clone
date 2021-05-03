import React from 'react';
import Button from './Button';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <div className=' w-[275px] h-screen flex flex-col justify-between p-1'>
      <div className='flex flex-col items-start'>
        <Button secondary>
          <span>Logo</span>
        </Button>
        <Button secondary>
          <span>Anasayfa</span>
        </Button>
        <Button secondary>
          <span>Keşfet</span>
        </Button>
        <Button secondary>
          <span>Mesajlar</span>
        </Button>
        <Button secondary>
          <span>Yer İşaretleri</span>
        </Button>
        <Button secondary>
          <span>Listeler</span>
        </Button>
        <Button secondary>
          <span>Profil</span>
        </Button>
        <Button secondary>
          <span>Daha Fazla</span>
        </Button>
        <Button primary className='w-full'>
          Tweetle
        </Button>
      </div>

      <div className='flex justify-between '>
        <div className='flex'>
          <div className='mr-2'>
            <Image
              className='rounded-full '
              src='/images/profile-image.jpg'
              alt='profile'
              height={48}
              width={48}
            />
          </div>

          <div className='flex flex-col'>
            <span className='font-bold'>Mertcan</span>
            <span className='text-gray'>@MertcanCet</span>
          </div>
        </div>

        <div className='font-bold leading-10 '>...</div>
      </div>
    </div>
  );
};

export default Sidebar;
