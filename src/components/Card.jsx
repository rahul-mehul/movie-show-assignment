import React from 'react'

function Card(props) {

    return (
        <div>
            <div className="card" style={{ width: "12rem" }}>
                <img src={props.poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <b>{props.year}</b>
                    <code className='p-2'>Rating 7.8</code>
                    <p className="card-text"> {props.description}</p>
                </div>
            </div>


        </div>
    )
}

export default Card
