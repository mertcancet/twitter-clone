import React from 'react';
import SearchBox from './SearchBox';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const Timeline = () => {
  return (
    <div className=' w-[355px] hidden lg:block sticky top-0 z-10 h-screen'>
      <SearchBox />
      <div className='m-3 '>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='reactjs'
          theme='dark'
          options={{ height: '850' }}
        />
      </div>
    </div>
  );
};

export default Timeline;
