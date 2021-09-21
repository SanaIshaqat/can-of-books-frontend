import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      books: [],
      showUpdate: false,
      id: " ",
      title: " ",
      description: " ",
      status: " ",
      email: " ",


    }
  }

  componentDidMount = async () => {
    axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/get-data`).then(response => {
      this.setState({
        books: response.data
      });
      console.log(response.data);
    })

  };

  handleDelete = (id) => {
    let config = {
      method: "DELETE",
      baseURL: process.env.REACT_APP_BACKEND_SERVER,
      url: `/delete-book/${id}`
    }
    axios(config).then(res => {
      console.log(res.data);
    });
  }


  handleTitle = (e) => {
    this.setState({ title:e.target.value });
  }
  handleDescription = (e) => {
    this.setState({ description:e.target.value });
  }
  handleStatus = (e) => {
    this.setState({ status:e.target.value });
  }
  handleEmail = (e) => {
    this.setState({ email:e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "POST",
      baseURL: process.env.REACT_APP_BACKEND_SERVER,
      url: `/create-book`,
      data: {
        title: this.state.title,
        description: this.state.description,
        status: this.state.status,
        email: this.state.email
      }
    }
    axios(config).then(res => {
      console.log(res.data)
      this.setState({
        books: res.data
      })
    })
  }
  handleUpdate=(id,title,description,status,email,)=>{
    this.setState({
      title:title,
      description:description,
      status:status,
      email:email,
      id:id,
      showUpdate:true
    })
  }

  handleUpdateForm=()=>{
    let config={
      method:"PUT",
      baseURL:process.env.REACT_APP_BACKEND_URL,
      url:`/update-data/${this.state.id}`,
      data:{
        title:this.state.title,
        description:this.state.description,
        status:this.state.status,
        email:this.state.email
      }
    }
    axios(config).then(res=>{
      this.setState({
        books:res.data
      })
    });
  }





  render() {
    return (
      <>

        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="//get-data">
             /* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */
            </Route>
             /* TODO: add a route with a path of '/profile' that renders a `Profile` component */
          </Switch>
          <br />
          
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" placeholder="title" onChange={this.handleTitle} />
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" placeholder="description" onChange={this.handleDescription} />
              <Form.Label>Book Status</Form.Label>
              <Form.Control type="text" placeholder="Enter Book Status" onChange={this.handleStatus} />
              <Form.Label>Contact Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Contact Email" onChange={this.handleEmail} />
              <br />
              <Button variant="dark" value="create" type="submit" >Submit</Button>
            </Form.Group>
          </Form>
          <br />

          {
            this.state.books.map(book => {
              return <BestBooks title={book.title}
                description={book.description}
                status={book.status} email={book.email}
                id={book._id}
                handleDelete={this.handleDelete}
                handleUpdate={this.handleUpdate} />
            })

          }


          <Footer />
        </Router>
      </>


    )
  }
}


export default App;
