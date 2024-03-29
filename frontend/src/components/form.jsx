import React, {useState} from 'react'
import "./form.css"

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        if (email && password) {
             const newEntry = { id: new Date().getTime().toString(), email, password };

            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);

            setEmail("");
            setPassword("");
        } else {
            alert("Please fill the data");
        }
       
    }
    
    return (
        <div className='login-body'>
          <form className='form-login' action="" onSubmit={submitForm}>
            <div className = "form-box">
                <label className='form-label'  htmlFor="driverName">Name</label> {" "}  
                    <input className='form-input' classtype="text" name="driverName" id="driverName" autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                />    
            </div>  

            <div className = "form-box">
                <label className='form-label' htmlFor="driverID">Vehicle Registration No.</label>{" "}  
                    <input className='form-input' type="driverID" name="driverID" id="driverID" autoComplete="off"
                        value={password}
                          onChange={(e) => setPassword(e.target.value)}
                />    
            </div>   

            <button className = "form" type="submit">Login</button>
                
            </form>  


        </div>
    )   
}

export default BasicForm