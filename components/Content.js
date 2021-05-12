import React from 'react';
import { PopulerTweets } from '../icons';
import TweetBox from './TweetBox';

const Content = () => {
  return (
    <div className=' flex-1 twitter-border  border-r-[0.7px]'>
      <div className='flex justify-between p-5 twitter-border border-b-[0.7px] items-center'>
        <span className='font-extrabold text-xl '>Anasayfa</span>
        <PopulerTweets className='w-10 h-10 text-primary rounded-full p-2 hover:bg-primary-darkest ' />
      </div>
      <TweetBox />
    </div>
  );
};

export default Content;
