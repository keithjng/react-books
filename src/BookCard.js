import React, { Component } from 'react';

const BookCard = (props) => {
    const { volumeInfo } = props.info;
    const {title, authors, subtitle, publishedDate} = props.info.volumeInfo;
    const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') == false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;
    const {canonicalVolumeLink} = props.info.volumeInfo;



  //   if (authors.length > 1) {
  //     let newAuthors = []
  //     for (let author of authors) {
  //       if (newAuthors.length > 1){
  //         newAuthors = newAuthors + 'and' + author
  //       }

  //  }
  // }
  let newAuthors = [authors[0]]

    // const newAuthors = authors
    if (authors.length > 1) {
      for (let i = 1; i<authors.length; i++) {
          newAuthors.push(',')
          newAuthors.push(' ')
          newAuthors.push(authors[i])
        }
   }




    return (

      <div className="card-container">
        <a href= {canonicalVolumeLink}> <img src={thumbNail}></img></a>
        <div className="desc">
          <h2>{title}</h2>
          <h3>Author: {newAuthors}</h3>
          <p>Published: {publishYear == "0000" ? "Not available" : publishYear.substring(0,4)}</p>
        </div>
      </div>


    );
  }
//}


export default BookCard;
