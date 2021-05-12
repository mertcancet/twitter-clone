import Image from 'next/image';
import React from 'react';
import { Emoji, Gif, Media, Plan, Survey } from '../icons';
import Button from './Button';

const TweetBox = () => {
  return (
    <div className='flex justify-between h-[125px]   twitter-border  border-[0.7px]'>
      <div className='ml-2 mt-1 flex items-start '>
        <img
          className='rounded-full w-12 h-12'
          src='/images/profile-image.jpg'
          alt='profile'
        />
        <div className='relative h-full pt-2 pl-2'>
          <textarea
            className=' focus:outline-none bg-[#15202B] font-semibold text-lg mt-2 ml-3 w-full outline-none overflow-hidden resize-none'
            placeholder='Neler oluyor?'
          />
          <div className='absolute bottom-0  flex '>
            <Media className='w-12 h-12 text-primary-dark p-3  hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Gif className='w-12 h-12 text-primary-dark p-3    hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Survey className='w-12 h-12 text-primary-dark p-3 hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Emoji className='w-12 h-12 text-primary-dark p-3  hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Plan className='w-12 h-12 text-primary-dark p-3   hover:bg-primary-darkest hover:rounded-full' />{' '}
          </div>
        </div>
      </div>
      <div className='flex items-end'>
        <Button primary className='mb-2 mr-2 focus:outline-none py-2'>
          Tweetle
        </Button>
      </div>
    </div>
  );
};

export default TweetBox;
