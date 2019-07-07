//dependecies
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'; 
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//assets
import logo from './logo.svg';
import './App.css';
import {
  actionGetPersons, 
  actionPostPerson,
  actionGetPetsOfPerson,
  actionPostPet
} from './redux/actions/allActions';




class App extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let person = {}
    this.props.onPostPerson(person);
  }

  static propTypes = {
    onGetPersons: PropTypes.func.isRequired,
    onPostPerson: PropTypes.func.isRequired,
  }



  render() {
    return(
      <div className="App">
        <button>Test</button>

      </div>
    );
  }

} //fin del componente.

  const mapDispachToProps = (dispach) => {
  return {
      onGetPersons: () => {
        dispach(actionGetPersons());
    },
      onPostPerson: (person) => {
        dispach(actionPostPerson(person));
    },
      onPostPet: (pet) => {
        dispach(actionPostPet(pet));
    },
      onGetPetsOfPerson: (person) => {
        dispach(actionGetPetsOfPerson(person));
      }
  }
}

  const mapStateToProps = (store, ownProps) => {
    return {
      persons: store.reducerPerson.persons,
      petsOfPerson: store.reducerPet.petsOfPerson,
      }
  }




export default withRouter(connect(mapStateToProps,mapDispachToProps)(App));