import React, { useState, useEffect } from 'react';
import { PopulerTweets } from '../icons';
import Divider from './Divider';
import TweetBox from './TweetBox';
import db from '../firebase';
import FeedList from './FeedList';
const Content = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection('feed')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className=' flex-1 twitter-border  border-r-[0.7px]'>
      <div className='sticky top-0 z-10 bg-[#15202B]  flex justify-between p-5 twitter-border border-b-[0.7px] items-center  '>
        <span className='font-extrabold text-xl '>Anasayfa</span>
        <PopulerTweets className='w-10 h-10 text-primary rounded-full p-2 hover:bg-primary-darkest ' />
      </div>
      <TweetBox />
      <Divider />

      <FeedList tweets={tweets} />
    </div>
  );
};

export default Content;
