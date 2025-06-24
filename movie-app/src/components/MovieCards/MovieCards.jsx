import React, { useState } from "react";
import "./MovieCards.scss"
import Modal from "../Modal/Modal";

const MovieCards = ({movieList})=>{
    const [isDetailsLinkClicked,setIsDetailsLinkClicked]=useState(false)
    const [fetchedDetails, setFetchedDetais]=useState([])
    const handleDetailsLinkClick=(e)=>{
        let filterFetchedDetails = movieList.filter(d=>d.id === Number(e.target.id))
        setFetchedDetais(filterFetchedDetails)
        setIsDetailsLinkClicked(true)
    }

    const handleClose=()=>{
        setIsDetailsLinkClicked(false)
    }

    return(
        <>
        <div className="card-section-container">
        {movieList.map(d=>(
            <div class="card">
            <img alt="Avatar" src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} style={{width:'100%'}}/>
                <div class="card-container">
                    <h4><b>{d.original_title}</b></h4>
                    <a onClick={(e)=>handleDetailsLinkClick(e)} id={d.id}>Details</a>
                </div>
            </div>))}
            {isDetailsLinkClicked && <Modal isOpen={isDetailsLinkClicked} onClose={handleClose} details={fetchedDetails}/>}
          </div>
            </>
    )
}

export default MovieCards;