import React from 'react';
import { Link } from 'react-router-dom';

const MasVendidosCard = ({ img, title, to }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={img} alt="Más vendidos" />
      <div className="card-body">
        <h5 className="card-title sansita">{title}</h5>
        <Link to={to} className="btn-primary btn">
          Más información
        </Link>
      </div>
    </div>
  );
};

export default MasVendidosCard;
