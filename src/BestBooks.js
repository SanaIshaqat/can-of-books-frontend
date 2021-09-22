import React from 'react';
import axios from 'axios';
import { Button,Form} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

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

  render() {

    return (
      <>
              <br />
             <h2>{this.props.title} </h2> 
              <br />
              <p><h3>Description:</h3>{this.props.description}</p>
              <p><h3>Status:</h3>{this.props.status}</p>
              <p><h3>Email:</h3>{this.props.email}</p>
              
              <br />
              <Button  onClick={()=>{this.props.handleDelete(this.props.id)}} variant="dark">Delete</Button> <br />
              <br />
              <Button onClick={()=>{this.props.handleUpdate(this.props.id,this.props.title,this.props.description,this.props.status,this.props.email)}} variant="dark">Update</Button> <br />
              <br />
              </>
    )
  }
}
export default withAuth0 (BestBooks);
