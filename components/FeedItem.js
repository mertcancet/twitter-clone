import React from 'react';
import { Comment, Favorite, Retweet, Share } from '../icons';

const FeedItem = ({ tweet }) => {
  const { avatar, content, displayName, timestamp, userName } = tweet;

  return (
    <div className='twitter-border border-b-[0.7px] mb-4 '>
      <div className='flex my-2 mx-3 '>
        <img className='rounded-full w-12 h-12' src={avatar} alt='profile' />
        <div className='ml-2 w-full'>
          <div className='flex items-center flex-wrap'>
            <span className='font-bold mr-2'> {displayName}</span>
            <span className='text-gray-dark mr-2'>{userName}</span>
            <div className='h-1 w-1 rounded-full bg-gray-dark mr-2' />
            <span className='text-gray-dark '>
              {timestamp?.toDate().toLocaleTimeString('tr-TR')}
            </span>
          </div>
          <div>{content}</div>
          <div className='flex justify-between space-y-1'>
            <div className='text-gray-dark p-2 hover:bg-primary hover:bg-opacity-5  hover:text-primary-dark rounded-full'>
              <Comment className='w-5 h-5 ' />
            </div>
            <div className='text-gray-dark p-2 hover:bg-green-500 hover:bg-opacity-5  hover:text-green-600 rounded-full'>
              <Retweet className='w-5 h-5 ' />
            </div>
            <div className='text-gray-dark p-2 hover:bg-red-500 hover:bg-opacity-5  hover:text-red-600 rounded-full'>
              <Favorite className='w-5 h-5 ' />
            </div>
            <div className='text-gray-dark p-2 mr-3 hover:bg-primary hover:bg-opacity-5  hover:text-primary-dark rounded-full'>
              <Share className='w-5 h-5 ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
