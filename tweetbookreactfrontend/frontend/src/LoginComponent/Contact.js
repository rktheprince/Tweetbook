import React from 'react';
import emailjs from 'emailjs-com';
class Contact extends React.Component {

    sendEmail(e) {
        e.preventDefault();
            
        emailjs.sendForm('service_gmail', 'template_fqmsiun', e.target, 'user_PhldHJNrz9xYoYVJPmtXn')//serviveId,TemplateId,e.target,UserId
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert("Submitted Successfully");
      }

     render(){
    return (
        <div className="col-md-12 col-sm-12 col-xs-12"  style={{backgroundImage: "linear-gradient(0deg, skyblue, rgb(0, 89, 255))", padding:"70px 10px 75px 10px"}}>
           <button type="submit" style={{width:"200px", marginLeft:"10px", fontSize:"medium"}} className="btn btn-primary"  onClick={()=>this.props.history.push("/mainhome")} >
                  BACK
                </button>
    
        <div style={{ maxWidth:"450px", border: "3px solid #025bfe", margin:"0px auto", padding: "30px", borderRadius: "20px", backgroundColor:"white"}}>
            <h1 style={{color: "black", fontFamily:"Times New Roman", textAlign:"center",fontSize:"x-large"}}><b>Contact Us</b></h1>
            <form onSubmit={this.sendEmail}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" className="font-weight-bold" style={{fontSize:"medium"}}><b>Name</b></label>
                <input  style={{fontSize:"medium"}}
                type="name" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Name" />
                <p style={{color: "black", fontSize:"small"}}>We will never share your details with anyone</p>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" className="font-weight-bold" style={{fontSize:"medium"}}><b>Email</b></label>
                <input style={{fontSize:"medium"}}
                 type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="Email Address"/>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" className="font-weight-bold" style={{fontSize:"medium"}}><b>Query</b></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" rows="3" style={{fontSize:"medium"}}>Enter Your Feedback</textarea>
            </div>
            <input className="btn btn-primary" value="Send Message" type="submit"/>
            </form>
        </div>
        </div>
    );
     }
}

export default Contact;
