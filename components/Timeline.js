import React from 'react';
import SearchBox from './SearchBox';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const Timeline = () => {
  return (
    <div className=' w-[355px]'>
      <SearchBox />
      <div className='m-3 h-[100vh-60px]'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='reactjs'
          theme='dark'
          options={{ height: 'calc(100vh - 85px)' }}
        />
      </div>
    </div>
  );
};

export default Timeline;
