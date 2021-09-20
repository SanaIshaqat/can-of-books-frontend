import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showData: false
    }
  }
  componentDidMount = async () => {
    axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/get-data`).then(response => {
      this.setState({
        books: response.data,
        showData: true

      });
      console.log(response.data);
    })

  };


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
     

      <>
      
        <h1>My Essential Lifelong Learning &amp; Formation Shelf</h1>
        <h2>Books By Author</h2>,

        {this.state.books.length ? (
        //  <p>Book Carousel coming soon</p>,
        
         this.state.showData &&
           this.state.books.map(post => {
             return (
               <>
 
                 <h3>Author: {post.name} </h3>
                 <br />
                 {post.books.map(book => {
 
                   return (
                  //   <Carousel>
                  //   <Carousel.Item>
                  //     <img
                  //       className="d-block w-100"
                  //       src="https://cdn.lifehack.org/wp-content/uploads/2015/03/50-anniversary-cover1.jpg"
                  //       alt="First slide"
                  //     />
                  //     <Carousel.Caption>
                  //       <h3>{book.title}</h3>
                  //       <p>{book.description}</p>
                  //     </Carousel.Caption>
                  //   </Carousel.Item>
                  // </Carousel>

                   <h3>Title:<br /> {book.title}
                   <br />
                   <br />
                   Description:<br /> {book.description}
                   <br />
                   <br />
                   Status:<br /> {book.status}
                   <br /><br />
                   Email:<br /> {book.email}
                   <br /><br />
                   <br /><br />
                   </h3>
                   
                           
                   )
 
                 })}
               </>
             )
 
 
           })
         
        ) : (
          <h3>No Books Found :(</h3>
        )} 
       
      </>
    )
  }
}

export default BestBooks;
