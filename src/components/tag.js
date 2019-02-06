import React from 'react';
import './tag.css';

const Tag = (props) => {
  return (
    <span className="badge badge-primary tag" style={{backgroundColor: props.color}}>{props.type}</span>
  );
}

export default Tag;