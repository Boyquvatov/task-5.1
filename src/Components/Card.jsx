import React from 'react';

const Card = ({ id, name, desc, onDelete }) => {
  return (
    <div className="card my-2 mr-2">
      <div className="card-header">
        <h1>{name}</h1>
      </div>
      <div className="card-body">
        <p>{desc}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
