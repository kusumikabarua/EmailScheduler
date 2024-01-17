
import jsonData from '../data/email.json';
export const fetchData = async() => {
    try{
       return jsonData;
    }catch(err){
        console.error(err);
    }
}