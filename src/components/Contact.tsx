export default function Contact() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <input className="input" name="name" placeholder="Your name" required />
      <input className="input" name="email" placeholder="Email" type="email" required />
      <textarea className="textarea" name="message" placeholder="Tell us about your gift idea..." />
      <button className="btn" type="submit">Send message</button>
    </form>
  )
}


