import '../Styles/EventBox.css';
import { useState } from 'react';
import Select from 'react-select';
import './Confirm.jsx';
import { Link } from 'react-router-dom';
function Updateacademy() {

    const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };

    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        // { value: 'orange', label: 'Orange' },
        // { value: 'pear', label: 'Pear' },
        // { value: 'grape', label: 'Grape' },
      ];      
  
        const [selectedOptions, setSelectedOptions] = useState([]);
      
        const handleMultiSelectChange = (selectedOptions) => {
          setSelectedOptions(selectedOptions);
        };
    
    return (
        <div>
            <div className="modal-container">
                <div className="modal-content">
                <div className="evnt-create-box">
                    <div className=''>
                        <a href="/BookEvents"><img className="eb-img" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a>
                        <h1 className='eb-h1'>Update Academy:</h1><br></br>
                        <div className='event-details'>
                            <div className='event-items'>
                            <label className='eb-label'>Enter Academy name:</label>
                            <input className="eb-input" type="text" placeholder="Academy "  />
                            <label className='eb-label'>      Enter contact number:</label>
                            <input className="eb-input" type="text" placeholder="Phone number"  required/><br></br>
                            <label className='eb-label'>Enter Academy Image URL:</label>
                            <input className="eb-input" type="text" placeholder="Image url"  required/>
                            <label className='eb-label'>Enter Academy E-mail:</label>
                            <input className="eb-input" type="text" placeholder="E-mail"  required/><br></br>
                            <label className='eb-label'>Enter Academy location:</label>
                            <input className="eb-input" type="tel" placeholder="Location" required />
                            <label className='eb-label'>Enter Academy Description:</label>
                            <input className="eb-input" type="tel" placeholder="Description" required /><br></br>
                            
                            </div>
                            <div  className='event-items'>
                            <label className='eb-label'>Academy Address</label>
                            <textarea className="eb-textarea" type="text" rows="4" cols="50" placeholder="Enter Applicant Address"  />
                            {/* <label className='eb-label'>Event Date</label>
                            <input className="eb-input" type="date" required/>
                            <label className='eb-label'>Event Time</label>
                            <input className="eb-input" type="time" required/>
                            <label className='eb-label'>No. of People</label>
                            <input className="eb-input" type="number" placeholder="Enter the Number of People"  /> */}
                            </div>
                           
                          <Link to="/Backhome"> <button className='create-button' >Submit</button></Link>
                            </div>
                            {/* <div className={wrapper ${isActive ? 'active' : ''}}>
                                <button className={custom-button ${isActive ? 'is_active' : ''}} onClick={handleButtonClick}> */}
                                    {/* <span>Book Event</span> */}
                                    <div className="success">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
                                        <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                    </svg>
                                    </div>
                                {/* </button> */}
                               
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
    )
}
export default Updateacademy