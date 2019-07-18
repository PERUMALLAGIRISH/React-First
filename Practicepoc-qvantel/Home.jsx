import React, { Component, Fragment } from 'react';

import AddList from './AddList';

import axios from 'axios';

import { Button, Modal } from 'react-bootstrap';

//var Button = ReactBootstrap.Button;
//var Modal = ReactBootstrap.Modal;

class Home extends Component {
    state = {
        Lists: [],
        editElement: {},
        showModal: false,
        
        editForm:{
            id:"",
            name:"",
            description:"",
            price:""
        }
        

    }

    componentDidMount() {
        axios.get(`http://localhost:5000/products`)
            .then(res =>
                //console.log(res)
                this.setState({ Lists: res.data })
            )
    }


    handleClose = () => {
        this.setState({ showModal: false });
    }

    handleEditChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleOpen = (product) => {
            const { id,name,description,price} = product
            this.setState({editForm:{
                id:id,
                name:name,
                description: description,
                price: price
            }, showModal: true})
    }

    handleUpdate = () => {
        // axios.get(`http://localhost:5000/products/`+ id)
        // .then( (res) => {  
        //     console.log(res.data);
        //     this.setState({editElement : res.data})
        // });
    }

    handleDelete = (list) => {
        //alert(list.id)
        //event.preventDefault();
        axios.delete(`http://localhost:5000/products/` + list.id)
            .then(res =>
                //console.log(res)
                this.setState({ Lists: res.data })
            )
    }

    render() {
        return (
            <Fragment>
                <AddList editElement={this.state.editElement} />
                {/* <p>{this.state.editList.id}</p> */}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Lists.map(List => (
                                <tr key={List.id}>
                                    <td>{List.id}</td>
                                    <td>{List.name}</td>
                                    <td>{List.description}</td>
                                    <td>{List.price}</td>
                                    <td><button onClick={() => this.handleOpen(List)} className="btn btn-info">Edit</button></td>
                                    <td><button onClick={() => this.handleDelete(List)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Product Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-inline">
                        <div className="form-group mt-3">
                            <label className="control-label col-sm-4">ID: </label>
                            <div className="col-sm-8">
                                <input type="text"
                                className="form-control"
                                value={this.state.editForm.id}
                                name="id"
                                onChange={this.handleEditChange} />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label className="control-label col-sm-4">Name: </label>
                            <div className="col-sm-6">
                                <input type="text"
                                className="form-control"
                                value={this.state.editForm.name}
                                name="name"
                                onChange={this.handleEditChange} />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label className="control-label col-sm-4">Description: </label>
                            <div className="col-sm-6">
                                <input type="text"
                                  className="form-control"
                                  value={this.state.editForm.description}
                                  name="description"
                                  onChange={this.handleEditChange} />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label className="control-label col-sm-4">Price: </label>
                            <div className="col-sm-6">
                                <input type="text"
                                className="form-control"
                                value={this.state.editForm.price}
                                name="price"
                                onChange={this.handleEditChange} />
                            </div>
                        </div>
                        
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button onClick={this.handleUpdate}>Update</Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    }
}

export default Home
