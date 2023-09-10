import React, { Component } from 'react'
import noimgfound from './noimgfound.png'

export default function News_item(props) {
  return (
    <div className='my-3'>
      <div className="card">
        <span className="badge rounded-pill bg-danger" style={{position: 'absolute' , right : '0'}}>
          {props.source}</span>
        <img src={props.url ? props.url : noimgfound} className="card-img-top" alt="Error404" style={{height:"257.71px"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.title ? props.title : ""}...</h5>
          <p className="card-text">{props.desc ? props.desc.slice(0,95) : ""}...</p>
          <p className="card-text"><small className="text-body-secondary">- By {!props.author ? "unknown" : props.author} on {new Date(props.date).toGMTString()} </small></p>
          <a href={props.news} target='_blank' className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}