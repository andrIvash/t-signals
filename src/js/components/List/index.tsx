import React from 'react';
import './index.scss';


const clickHandler = (evt:any) => {
  console.log("test", evt.target);
};

const Elem = (props: any) => {
  return(
    <div className="elem">
      {props.title}
    </div>
  )
};

const List = (props) => {
  

  const items = props.items.map(item => {
    console.log('start')
    return (
      <Elem
        key={item.id}
        value={item.title}
      />
    );
  });

  return (
    <div className="List" onClick={clickHandler}>
      {items}
    </div>
  )
}

export default List;