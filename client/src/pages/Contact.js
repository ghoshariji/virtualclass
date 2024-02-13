import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can send this data to your server or perform any other necessary actions
  };

  return (
//     <>
//     <div className='contact_info'>
//        <div className='container-fluid'>
//        <div className='row'>

//        <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>

//        {/*  phone number */}
//        <div className='contact_info_item d-flex justify-content-start align-items-center'>
//        <img src="smartphone1.png" alt="phone"/>

//        <div className='contact_info_content'>

//        <div className='contact_info_title'>
//        Phone
       
//        </div>


//        <div className='contact_info_text'>
       
//        123456
//        </div>
       
//        </div>
       
//        </div>



// {/*  Email */}

//        <div className='contact_info_item d-flex justify-content-start align-items-center'>
//        <img src="smartphone1.png" alt="phone"/>

//        <div className='contact_info_content'>

//        <div className='contact_info_title'>
//        Email
       
//        </div>
       


//        <div className='contact_info_text'>
       
//        niladri123@gmail.com
//        </div>
       
//        </div>
       
//        </div>



// {/*  address number*/}

//        <div className='contact_info_item d-flex justify-content-start align-items-center'>
//        <img src="smartphone1.png" alt="phone"/>

//        <div className='contact_info_content'>

//        <div className='contact_info_title'>
//        Address
       
//        </div>


//        <div className='contact_info_text'>
       
//        Pune,MI,!@0
//        </div>
       
//        </div>
       
//        </div>


//        </div>
//        </div>

//        </div>
      
//     </div>




//     {/*contact us form */}


//     <div className='contact_form'>
//     <div className='container'>
//     <div className='row'>
//     <div className='col-lg-10 offset-lg-1'>
//     <div className='contact_form_container py-5'>
//     <div className='contact_form_title'>
//     Get in Touch
//     </div>
// <form id="contact_form"> 

// <div className='contact_form_name d-flex justify-content-between align-items-between'>
// <input type='text' id='contact_form_name'
// className='contact_form_name input_field'
// placeholder='Your name' required="true"/>


// <input type='email' id='contact_form_email'
// className='contact_form_email input_field'
// placeholder='Your email' required="true"/>


// <input type='number' id='contact_form_phone'
// className='contact_form_phone input_field'
// placeholder='Your Phone Number' required="true"/>

// </div>

// <div className='contact_form_text mt-4'>
// <textarea className='text_field contact_form_message'  placeholder="Message" id="" cols="74" rows="3"></textarea>
// </div>


// <div className='contact_form_button'>
// <button type="submit" className='button contact_submit_button' >Send Message</button>
// </div>
// </form>

//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </>




<div style={styles.container}>
      <h2>Contact Us</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...styles.input, ...styles.textarea }}
            required
          ></textarea>
        </label>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>











    
  )
}



const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
    fontSize: '16px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    margin: '5px 0',
  },
  textarea: {
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default Contact
