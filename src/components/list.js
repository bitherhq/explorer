import React from 'react';
import classnames from 'classnames';

export default function(props) {
  const { className, list } = props;

  return (
    <div className={classnames(className)}>
      {
        Object.keys(list).map((property, index) => {
          return (
            <div key={index} className="list-item">
              <span>{property}:</span>
              <span>{list[property]}</span>
            </div>
          );
        })
      }
    </div>
  );
}
