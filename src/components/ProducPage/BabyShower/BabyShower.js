import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const BabyShower = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Baby Shower';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>Baby Shower</h1>
            <hr />
            <ProductList type="Baby Shower" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BabyShower;