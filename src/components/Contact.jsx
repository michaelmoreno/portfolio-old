import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Get in touch</h2>
      <form action="/contact" method="POST">
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" required/>
          <input type="text" name="email" placeholder="Email" required/>
        </div>
        <input type="text" name="subject" placeholder="Subject" required/>
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
