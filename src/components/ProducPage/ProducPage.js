import React, { useEffect } from 'react';
import Productos from './Productos';
import Sidebar from './Sidebar';

const ProducPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Nuestros productos';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col">
            <Productos />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProducPage;
