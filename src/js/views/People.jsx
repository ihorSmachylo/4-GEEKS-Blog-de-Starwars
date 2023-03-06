import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container bg-dark mb-3">
            <h1 className="text-light text-center pt-4">People</h1>

            <h2 className="text-light text-center pt-4">Under Construction</h2>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
         <div className="col">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Luke Skywalker</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <Link to="#" className="btn btn-secondary">Details</Link>
                <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
              </div>
            </div>
          </div>
  			</div>

            <div className="col-4">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/characters/2.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">C-3PO</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <Link to="#" className="btn btn-secondary">Details</Link>
                <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
              </div>
            </div>
          </div>
  			</div>

              <div className="col-4">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">R2-D2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <Link to="#" className="btn btn-secondary">Details</Link>
                <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
              </div>
            </div>
          </div>
  			</div>

              <div className="col-4">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Darth Vader</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <Link to="#" className="btn btn-secondary">Details</Link>
                <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
              </div>
            </div>
          </div>
  			</div>
          
              <div className="col-4">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/characters/5.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Leia Organa</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <Link to="#" className="btn btn-secondary">Details</Link>
                <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
              </div>
            </div>
          </div>
  			</div>

              <div className="col-4">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/characters/13.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Chewbacca</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <Link to="#" className="btn btn-secondary">Details</Link>
                <Link to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></Link>
              </div>
            </div>
          </div>
  			</div>
        </div>
        
		</div>
		
	);
};