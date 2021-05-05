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

const navList = [
  {
    icon: <Home className={'sidebar-icon'} />,
    title: 'Anasayfa',
    href: '/',
  },
  {
    icon: <Hashtag className={'sidebar-icon'} />,
    title: 'Keşfet',
    href: '/kesfet',
  },
  {
    icon: <Bell className={'sidebar-icon'} />,
    title: 'Bildirimler',
    href: '/bildirimler',
  },
  {
    icon: <Message className={'sidebar-icon'} />,
    title: 'Mesajlar',
    href: '/mesajlar',
  },
  {
    icon: <Notification className={'sidebar-icon'} />,
    title: 'Yer İşaretleri',
    href: '/yer-isaretleri',
  },
  {
    icon: <List className={'sidebar-icon'} />,
    title: 'Listeler',
    href: '/listeler',
  },
  {
    icon: <Profile className={'sidebar-icon'} />,
    title: 'Profil',
    href: '/profil',
  },
  {
    icon: <More className={'sidebar-icon'} />,
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
          {navList.map((item) => (
            <li className='sidebar-nav-item group-hover:text-primary'>
              <Link href={item.href}>
                <a className='flex'>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </Link>
            </li>
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
