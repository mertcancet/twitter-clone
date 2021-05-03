import React from 'react';
import Button from './Button';

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
      <span>profil resmi</span>
    </div>
  );
};

export default Sidebar;
