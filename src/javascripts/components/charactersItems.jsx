import React from 'react';

export default props => (
  <li className="characters-item" key={props.id}>
    <div className="characters-item__card">
      <div className="characters-item__card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="characters-item__card-text">
        <h2 className="characters-item__card-text--name">{props.name}</h2>
        <p className="characters-item__card-text--id">id: {props.id} </p>
      </div>
    </div>
    <div className="characters-item__infos">
      <div className="characters-item__infos-items characters-item__infos-items--species">
        <span className="characters-title">SPECIES</span>
        <span className="characters-text">{props.species}</span>
      </div>
      <div className="characters-item__infos-items characters-item__infos-items--status">
        <span className="characters-title">STATUS</span>
        <span className="characters-text">{props.status}</span>
      </div>
      <div className="characters-item__infos-items characters-item__infos-items--gender">
        <span className="characters-title">GENDER</span>
        <span className="characters-text">{props.gender}</span>
      </div>
    </div>
  </li>
);