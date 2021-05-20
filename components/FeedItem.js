import React from 'react';

const FeedItem = ({ tweet }) => {
  const { avatar, content, displayName, timestamp, userName } = tweet;
  console.log(avatar, content, displayName, timestamp, userName);
  return (
    <div className='twitter-border border-b-[0.7px] mb-4'>
      <div className='flex my-2 mx-3'>
        <img className='rounded-full w-12 h-12' src={avatar} alt='profile' />
        <div className='ml-2'>
          <div className='flex items-center'>
            <span className='font-bold mr-2'> {displayName}</span>
            <span className='text-gray-dark mr-2'>{userName}</span>
            <div className='h-1 w-1 rounded-full bg-gray-dark mr-2' />
            <span className='text-gray-dark '>3sn</span>
          </div>
          <div>{content}</div>
          <div>icons</div>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
