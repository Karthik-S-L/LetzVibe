import React from "react";
import '../../App.css';
import '../Button.css';
import { Link } from "react-router-dom";




// export default function SignUp(){
//     return <h1 className="services">SIGN UP</h1>;
// }


 export default function SignUp(){
     return (
         <>
         <div className="sign-up-screen">
             <div className="sign-up-container">
                <h1 className="sign-up">SIGN UP</h1>
                <div class="sign-up-container-box">
                    <h2>Starting Your Adventure</h2>
                    <form className="sign-up-form">
                        <label  className="sign-up-form-label">Username:<input type="text" name="username" /></label>
                        <label  className="sign-up-form-label">Email-Id:<input type="text" name="emailid" /></label>
                        <label  className="sign-up-form-label">Password:<input type="text" name="password" /></label>
                            {/* <input className="btn" type="submit" value="Submit" /> */}
                        {/* <Button className="btns2" buttonStyle="btn--primary" buttonSize='btn--medium'>Submit</Button> */}
                        <Link  to={{pathname:''}} target="_blank" className='sign-up-submit' >Submit</Link>
                        </form>
                </div>
            </div>
        </div>
       </>
    
    );
    
 }










