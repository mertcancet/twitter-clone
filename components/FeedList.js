import React from 'react';
import FeedItem from './FeedItem';

const FeedList = ({ tweets }) => {
  console.log(tweets);
  return (
    <>
      {tweets.map((tweet) => (
        <FeedItem tweet={tweet} />
      ))}
    </>
  );
};

export default FeedList;
