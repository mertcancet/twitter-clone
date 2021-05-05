import React from 'react';
import Button from './Button';
import Image from 'next/image';
import {
  Home,
  Hashtag,
  Message,
  Profile,
  Notification,
  List,
  More,
  Logo,
} from '../icons';

const navList = [
  {
    icon: <Home className={'sidebar-icon'} />,
    title: 'Anasayfa',
  },
  {
    icon: <Hashtag className={'sidebar-icon'} />,
    title: 'Keşfet',
  },
  {
    icon: <Message className={'sidebar-icon'} />,
    title: 'Mesajlar',
  },
  {
    icon: <Notification className={'sidebar-icon'} />,
    title: 'Yer İşaretleri',
  },
  { icon: <List className={'sidebar-icon'} />, title: 'Listeler' },
  {
    icon: <Profile className={'sidebar-icon'} />,
    title: 'Profil',
  },
  {
    icon: <More className={'sidebar-icon'} />,
    title: 'Daha fazla',
  },
];

const Sidebar = () => {
  return (
    <div className=' w-[275px] h-screen flex flex-col justify-between p-1 twitter-border  border-r-[0.7px]'>
      <div className='flex flex-col items-start pr-8'>
        <Button secondary className='text-xl '>
          <Logo className={'sidebar-icon'} />
        </Button>
        {navList.map((item) => (
          <span className='sidebar-nav-item group-hover:text-primary'>
            {item.icon}
            <span>{item.title}</span>
          </span>
        ))}

        <Button primary className='w-full'>
          Tweetle
        </Button>
      </div>

      <div className='flex justify-between pr-5'>
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
