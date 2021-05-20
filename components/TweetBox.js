import React, { useState } from 'react';
import { Emoji, Gif, Media, Plan, Survey } from '../icons';
import Button from './Button';
import db from '../firebase';
import firebase from 'firebase';

const TweetBox = () => {
  const [content, setContent] = useState('');
  const sendTweet = () => {
    if (content) {
      db.collection('feed').add({
        displayName: 'Mertcan Cetinkaya',
        userName: '@mertcancet',
        content: content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        avatar: '/images/profile-image.jpg',
      });
      setContent('');
    }
  };
  return (
    <div className='flex justify-between h-[125px]   twitter-border  border-b-[0.7px]'>
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
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />

          <div className='absolute bottom-0 hidden  sm:flex '>
            <Media className='w-12 h-12 text-primary-dark p-3  hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Gif className='w-12 h-12 text-primary-dark p-3    hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Survey className='w-12 h-12 text-primary-dark p-3 hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Emoji className='w-12 h-12 text-primary-dark p-3  hover:bg-primary-darkest hover:rounded-full' />{' '}
            <Plan className='w-12 h-12 text-primary-dark p-3   hover:bg-primary-darkest hover:rounded-full' />{' '}
          </div>
        </div>
      </div>
      <div className='flex items-end'>
        <Button
          primary
          className='mb-2 mr-2 focus:outline-none py-2'
          onClick={sendTweet}
        >
          Tweetle
        </Button>
      </div>
    </div>
  );
};

export default TweetBox;
