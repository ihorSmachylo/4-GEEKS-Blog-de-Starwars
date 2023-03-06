import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const CardPlanets = ({ id, name, gender, eye_color,height, }) => {
    const { store, actions } = useContext(Context);
    const persons = store.persons;

    const urlImage = "https://starwars-visualguide.com/assets/img/characters." + id + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }


    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Eye color: {eye_color} </p>
                    <p className="card-text">Height: {height} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/planets/${id}`} className="btn btn-secondary" 
                            onClick={() => actions.getPerson({ id: id, name: name, gender: gender, eye_color: eye_color,height: height})}>
                                Details
                        </Link>
                        <Link className="btn btn-outline-warning" 
                            onClick={() => actions.favorites({ name, id })}>
                                <i className="far fa-heart fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}