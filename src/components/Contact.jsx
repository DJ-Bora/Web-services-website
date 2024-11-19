import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type='text' required placeholder='Abc' />
          </div>

          <div>
            <label>Email</label>
            <input type='email' required placeholder='Abc@mail.com' />
          </div>

          <div>
            <label>Subject</label>
            <input type='text' required placeholder='your subject' />
          </div>

          <div>
            <label>Message</label>
            <textarea required placeholder="Your message.." ></textarea>
          </div>

          <button type='submit'>Send</button>

        </form>
      </main>
    </div>
    
  )
}

export default Contact