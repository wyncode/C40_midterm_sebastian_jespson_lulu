import React from 'react';
import '../GiftBox Toy/GiftBoxToy.css';
const GiftBoxToy = () => {
  return (
    <div class="row">
      <div class="col-12">
        <h3 class="text-center text-light my-5">
          <strong>Hover the box</strong>
        </h3>
      </div>
      <div class="col-12 mt-5 d-flex justify-content-center">
        <div class="box">
          <div class="box-body">
            <img class="img" src="https://via.placeholder.com/150" />
            <div class="box-lid">
              <div class="box-bowtie"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiftBoxToy;
