import { addCustomData } from "../store/listReducer";

export const getNames = () => {
    return function (dispatch) {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            data.results.forEach(element => {
                dispatch( addCustomData(element) )
            });
        });
    }
}