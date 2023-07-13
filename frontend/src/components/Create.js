import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      phone: '',
      email: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, phone, email } = this.state;

    axios.post('/contacts', { name, address, city, phone, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, address, city, phone, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Agregar Contacto
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de contactos</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Nombres:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Nombres" />
              </div>
              <div class="form-group">
                <label for="title">Dirección:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Dirección" />
              </div>
              <div class="form-group">
                <label for="author">Ciudad:</label>
                <input type="text" class="form-control" name="city" value={city} onChange={this.onChange} placeholder="Ciudad" />
              </div>
              <div class="form-group">
                <label for="published_date">Nro. de telefono:</label>
                <input type="text" class="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Nro de telefono" />
              </div>
              <div class="form-group">
                <label for="publisher">Correo:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Correo" />
              </div>
              <button type="submit" class="btn btn-success">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
