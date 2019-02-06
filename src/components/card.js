import React from 'react';
import './card.css';
import Tag from './tag';

const Card = (props) => {

  return (
    <div className='task'>
      <div className='tag-holder'>
      {
        props.tags.map((e,i) => {
          return <Tag color={e.color} type={e.type} key={i} />;
        })
      }
      </div>
      <span className='task-title'>{props.title}</span>
    </div>
  )
}

export default Card;

