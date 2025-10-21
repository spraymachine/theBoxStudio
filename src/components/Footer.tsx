export default function Footer() {
  return (
    <div style={{ width: '100%' }}>
      <div className="brand" style={{ fontSize: '1.2rem' }}>The Box Studio</div>
      <div className="small">Personalised gifts • Minimal and colorful vibes</div>
      <div className="spacer-xl" />
      <div className="small">© {new Date().getFullYear()} The Box Studio. All rights reserved.</div>
    </div>
  )
}


