import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e607e8a5-4a00-4c7e-b219-26f92f587f0c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Thank you!",
        text: "We will right back to you!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form onSubmit={onSubmit}>
          <div>
            <label>Name</label>
            <input type='text' name='name' required placeholder='Abc' />
          </div>

          <div>
            <label>Email</label>
            <input type='email' name='email' required placeholder='Abc@mail.com' />
          </div>

          <div>
            <label>Subject</label>
            <input type='text' name='subject' required placeholder='your subject' />
          </div>

          <div>
            <label>Message</label>
            <textarea name='message' required placeholder="Your message.." ></textarea>
          </div>

          <button type='submit'>Send</button>

        </form>
      </main>
    </div>
    
  )
}

export default Contact