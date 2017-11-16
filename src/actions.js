import { FETCHING_PEOPLE, FETCHING_PEOPLE_FAILURE, FETCHING_PEOPLE_SUCCESS } from './constants';

export default function fetchPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople());
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(json => dispatch(getPeopleSucces(json.results)))
            .catch(err => dispatch(getPeopleFailure(err)))
    }
}

function getPeople() {
    return{
        type: FETCHING_PEOPLE
    }
}

function getPeopleSucces(data) {
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        data
    }
}

function getPeopleFailure(data) {
    return {
        type: FETCHING_PEOPLE_FAILURE,
        data
    }
}