import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('/contacts/'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  onChange = (e) => {
    const state = this.state.contact
    state[e.target.name] = e.target.value;
    this.setState({contact:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, postalCode, phone } = this.state.contact;

    axios.put('/contacts/'+this.props.match.params.id, { name, address, city, postalCode, phone })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Editar Contacto
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.contact.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Lista de contactos</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Nombres:</label>
                <input type="text" class="form-control" name="name" value={this.state.contact.name} onChange={this.onChange} placeholder="Nombres" />
              </div>
              <div class="form-group">
                <label for="title">Dirección:</label>
                <input type="text" class="form-control" name="address" value={this.state.contact.address} onChange={this.onChange} placeholder="Direccion" />
              </div>
              <div class="form-group">
                <label for="author">Ciudad:</label>
                <input type="text" class="form-control" name="city" value={this.state.contact.city} onChange={this.onChange} placeholder="Ciudad" />
              </div>
              <div class="form-group">
                <label for="published_date">Nro. teléfono:</label>
                <input type="text" class="form-control" name="phone" value={this.state.contact.phone} onChange={this.onChange} placeholder="Nro de telefono" />
              </div>
              <div class="form-group">
                <label for="description">Correo:</label>
                <input type="email" class="form-control" name="email" value={this.state.contact.email} onChange={this.onChange} placeholder="Correo" />
              </div>
              <button type="submit" class="btn btn-success">Actualizar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
