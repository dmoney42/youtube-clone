export const API_KEY = 'AIzaSyBdCB9ZZegwt8TKeIJbj9jsq4MW0Vzkm7A';

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    } else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
}