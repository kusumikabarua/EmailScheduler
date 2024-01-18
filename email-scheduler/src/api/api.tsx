
import jsonData from '../data/schedules.json';
export const fetchData = async() => {
    try{
       return jsonData;
    }catch(err){
        console.error(err);
    }
}