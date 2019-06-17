import axios, {get, post} from 'axios'; // no puedo importar delete por ser palabra reservada.

export const getPersons = () => {
  return get(); 
}

export const postPerson = (person) => {
  return post();
}

export const deletePerson = () => {
  return axios.delete();
}
