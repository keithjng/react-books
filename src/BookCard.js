import React, { Component } from 'react';

const BookCard = (props) => {
    const { volumeInfo } = props.info;
    const {title, authors, subtitle, publishedDate} = props.info.volumeInfo;
    const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') == false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;
    const {canonicalVolumeLink} = props.info.volumeInfo;

    // if (authors[1] !== undefined) {
   //   let newAuthors = authors[0] + " and " + authors[1];
   // }
   // else {
   //   newAuthors = authors;
   // }

    return (

      <div className="card-container">
        <a href= {canonicalVolumeLink}> <img src={thumbNail}></img></a>
        <div className="desc">
          <h2>{title}</h2>
          <h3>Author: {authors}</h3>
          <p>Published: {publishYear == "0000" ? "Not available" : publishYear.substring(0,4)}</p>
        </div>
      </div>


    );
  }
//}


export default BookCard;
