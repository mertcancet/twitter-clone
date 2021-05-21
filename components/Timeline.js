import React from 'react';
import SearchBox from './SearchBox';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const Timeline = () => {
  return (
    <div className=' w-[355px] hidden md:block sticky top-0 z-10 h-screen'>
      <SearchBox />
      <div className='m-3'>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='reactjs'
          theme='dark'
        />
      </div>
    </div>
  );
};

export default Timeline;
