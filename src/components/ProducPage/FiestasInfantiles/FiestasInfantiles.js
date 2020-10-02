import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const FiestasInfantiles = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Fiestas Infantiles';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>FiestasInfantiles</h1>
            <hr />
            <ProductList type="Fiestas Infantiles" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FiestasInfantiles;