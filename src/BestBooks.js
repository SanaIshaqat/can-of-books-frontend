import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showData:false
    }
  }
  componentDidMount = () => {
    axios.get(`${process.env.MONGO_SERVER}/get-data`).then(response => {
      this.setState({
        books: response.books,
        showData:true

      });
    })

  };


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {/* {this.state.books.length ? ( */}
          {/* <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )} */}
        <h1>Data</h1>
        {this.state.showData &&
          this.state.books.map(post => {
            return <h2>title={post.title} </h2>
          })
        }
      </>
    )
  }
}

export default BestBooks;
