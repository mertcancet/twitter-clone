import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home,
  Hashtag,
  Message,
  Profile,
  Notification,
  List,
  More,
  Logo,
  Bell,
} from '../icons';
import SidebarLink from './SidebarLink';

const navList = [
  {
    icon: Home,
    title: 'Anasayfa',
    href: '/',
  },
  {
    icon: Hashtag,
    title: 'Keşfet',
    href: '/kesfet',
  },
  {
    icon: Bell,
    title: 'Bildirimler',
    href: '/bildirimler',
  },
  {
    icon: Message,
    title: 'Mesajlar',
    href: '/mesajlar',
  },
  {
    icon: Notification,
    title: 'Yer İşaretleri',
    href: '/yer-isaretleri',
  },
  {
    icon: List,
    title: 'Listeler',
    href: '/listeler',
  },
  {
    icon: Profile,
    title: 'Profil',
    href: '/profil',
  },
  {
    icon: More,
    title: 'Daha fazla',
    href: '/daha-fazla',
  },
];

const Sidebar = () => {
  return (
    <div className=' w-[275px] h-screen flex flex-col justify-between p-1 twitter-border  border-r-[0.7px]'>
      <div className='flex flex-col items-start pr-8'>
        <Button secondary className='text-xl '>
          <Logo className={'sidebar-icon'} />
        </Button>
        <ul>
          {navList.map((item, i) => (
            <SidebarLink
              title={item.title}
              href={item.href}
              Icon={item.icon}
              key={i}
            />
          ))}
        </ul>

        <Button primary className='w-full py-3'>
          Tweetle
        </Button>
      </div>

      <div className='flex justify-between px-3 py-2 hover:bg-primary-darkest  rounded-full '>
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
