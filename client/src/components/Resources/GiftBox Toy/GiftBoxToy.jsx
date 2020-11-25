import React from 'react';
import '../GiftBox Toy/GiftBoxToy.css';

const GiftBoxToy = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h3 className="text-center text-light my-5"></h3>
      </div>
      <div className="col-12 mt-5 d-flex justify-content-center">
        <div className="box">
          <div className="box-body">
            <img className="img" src="https://via.placeholder.com/150" />
            <div className="box-lid">
              <div className="box-bowtie"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiftBoxToy;
