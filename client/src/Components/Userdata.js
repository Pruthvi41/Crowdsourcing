import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import '../App.css';
function Userdata(){
    const [duckData, setDuckData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then( (response) => {
          setDuckData(response.data);
        })
        .catch( (response) => {
          console.log(response);
        });
      }, []);
      const history = useHistory();
      const handleClick = () => history.push('/');
    return (
        <div>
            <table className="table table-bordered border border-5">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Time of the day</th>
                    <th scope="col">Type of food</th>
                    <th scope="col">Location</th>
                    <th scope="col">Number of ducks fed</th>
                    <th scope="col">Quantity of food</th>
                </tr>
            </thead>
            <tbody>
            {duckData.length!==0 && duckData.map((item)=> 
            <tr key= {Math.random()}>
                <td>{item.timeOfTheDay}</td>
                <td>{item.foodType}</td>
                <td>{item.duckLocation}</td>
                <td>{item.duckCount}</td>
                <td>{item.foodQuantity}</td>
            </tr>
          )}
          </tbody>
       </table>
       <button type="button" onClick={handleClick} className="btn btn-dark">HOME</button>
      </div>
    )
}
export default Userdata;