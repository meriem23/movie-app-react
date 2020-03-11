import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {v4 as uuidv4} from "uuid"

class AddMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      imgURL: "",
      ratings: "",
      year: "",
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNewMovie = () =>{
    this.props.addMovie({...this.state, id: uuidv4()})
    this.setState({show:false})
  }
  render() {
    return (
      <div>
        <i class="far fa-plus-square fa-3x plusSquare" onClick={this.handleShow}></i>
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="title"
                  onChange={this.handleChange}
                  value={this.state.value} />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="imgURL"
                  onChange={this.handleChange}
                  value={this.state.value} />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="ratings"
                  onChange={this.handleChange}
                  value={this.state.value} />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year"
                  onChange={this.handleChange}
                  value={this.state.value} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="dark" onClick={this.handleShow}>Close</Button> */}
            <Button variant="light" onClick={this.addNewMovie}>Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddMovies;