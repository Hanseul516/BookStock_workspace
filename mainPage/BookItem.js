import React from 'react';

function BookItem({ name, imageUrl, startingPrice, currentPrice, bidderCount }) {
  return (
    <div className="itemlist">
      <img src={imageUrl} alt={`Image of ${name}`} />
      <p>{name}</p>
      <span>시작 가격: {startingPrice}원</span>
      <p>현재 가격: {currentPrice}</p>
      <p>입찰자: {bidderCount}</p>
    </div>
  );
}

export default BookItem;
