import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import '../App.css';
function Home() {
  const [formData, setFormData] = useState({
    timeOfTheDay:'',
    foodType:'',
    duckLocation:'',
    duckCount:'',
    foodQuantity:''
  });
  const onChange = e=>setFormData({...formData, [e.target.name]: e.target.value});
  const onHandle = e=>setFormData({...formData, [e.target.name]: e.target.value});
  const history = useHistory();  
  const handleClick = () => history.push('/Userdata'); 
  const{timeOfTheDay, foodType, duckLocation, duckCount, foodQuantity} = formData;
  const onSubmit = async e =>{
    e.preventDefault();
    const newData = {
      timeOfTheDay,
      foodType,
      duckLocation,
      duckCount,
      foodQuantity
    }
    try{
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
        const body = JSON.stringify(newData);
        await axios.post('http://localhost:5000/',body, config);   
      }   
      catch(err){
      console.log(err);
    }
  }
  return (
    <div className="container mx-auto">
      <h1>Crowdsource Information</h1>
        <form onSubmit={e=>onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name" id="label-name">
            What time the ducks are fed?
            </label>
            <select className="form-control"
              value={formData.timeOfTheDay} name="timeOfTheDay"
              onChange={onHandle} >
              <option >Time of the day</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
            </div>
          <div className="form-group">
            <label htmlFor="name" id="label-name">
            What food the ducks are fed?
            </label>
            <input type="text"
                   name="foodType"
                   value={foodType}
                   onChange={e=>onChange(e)}
                   required
                   className="form-control"
                   placeholder="Type of food" />
          </div>
          <div className="form-group">
            <label htmlFor="name" id="label-name">
            Where the ducks are fed?
            </label>
            <input type="text"
                   name="duckLocation"
                   value={duckLocation}
                   onChange={e=>onChange(e)}
                   required
                   className="form-control"
                   placeholder="Location" />
          </div>
          <div className="form-group">
            <label htmlFor="name" id="label-name">
            How many ducks are fed?
            </label>
            <input type="number"
                   min="0"
                   name="duckCount"
                   value={duckCount}
                   onChange={e=>onChange(e)}
                   required
                   className="form-control"
                   placeholder="Number of ducks" />
          </div>
          <div className="form-group">
            <label htmlFor="name" id="label-name">
            How much food the ducks are fed?
            </label>
            <input type="number"
                   min="0"
                   name="foodQuantity"
                   value={foodQuantity}
                   onChange={e=>onChange(e)}
                   required
                   className="form-control"
                   placeholder="Quantity" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <br/>
        <button type="button" onClick={handleClick} className="btn btn-dark">View Data</button> 
    </div>
  );
}
export default Home;