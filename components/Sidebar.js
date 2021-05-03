import React from 'react';

const Sidebar = () => {
  return (
    <div className='border border-black bg-blue-500 w-[275px] h-screen flex flex-col justify-between p-1'>
      <div className='flex flex-col'>
        <span>Logo</span>
        <span>Anasayfa</span>
        <span>Keşfet</span>
        <span>Mesajlar</span>
        <span>Yer İşaretleri</span>
        <span>Lısteler</span>
        <span>Profil</span>
        <span>Daha Fazla</span>
        <button>Tweetle</button>
      </div>
      <span>profil resmi</span>
    </div>
  );
};

export default Sidebar;
