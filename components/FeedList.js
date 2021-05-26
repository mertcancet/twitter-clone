import React from 'react';
import FeedItem from './FeedItem';

const FeedList = ({ tweets }) => {
  return (
    <>
      {tweets.map((tweet) => (
        <FeedItem tweet={tweet} />
      ))}
    </>
  );
};

export default FeedList;
