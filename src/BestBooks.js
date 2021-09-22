import React from 'react';
import axios from 'axios';
import { Button,Form} from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showData: false,
        id: " ",
        title: " ",
        description: " ",
        status: " ",
        email: " ",
      
    }
  }
  
  
  

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  render() {
    /* TODO: render user's books in a Carousel */
    return (
      <>
  
        {/* <h1>My Essential Lifelong Learning Formation Shelf</h1>
        <h2>Books By Author</h2>,
        {this.state.books.length ? (       
          this.state.showData &&
          this.state.books.map(post => {
            return (
              <> */}
              <br />
             <h2>{this.props.title} </h2> 
              <br />
              <p><h3>Description:</h3>{this.props.description}</p>
              <p><h3>Status:</h3>{this.props.status}</p>
              <p><h3>Email:</h3>{this.props.email}</p>
              {/* <p><h3>Id:</h3>{this.props.id}</p> */}
              <br />
              <Button onClick={()=>{this.props.handleDelete(this.props.id)}} variant="dark">Delete</Button> <br />
              <br />
              <Button onClick={()=>{this.props.handleUpdate(this.props.id,this.props.title,this.props.description,this.props.status,this.props.email)}} variant="dark">Update</Button> <br />
              <br />
              </>
        //     )
        //   })
        // ) : (
        //   <h3>No Books Found :(</h3>
        // )}

      
    )
  }
}
export default BestBooks;
