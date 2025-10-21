export default function About() {
  return (
    <div className="about">
      <div>
        <p>
          At <strong>The Box Studio</strong>, we believe gifts should feel personal.
          Our small team crafts minimal, colorful pieces that spark smiles — from
          bespoke boxes to hand-lettered notes. Light vibes, lots of heart.
        </p>
        <p>
          We blend textures, colors and tiny details to keep things elegant yet playful.
          Everything is curated and assembled by hand.
        </p>
      </div>
      <div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
            Minimal & light-first design
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
            Subtle, happy color palettes
          </li>
          <li style={{ padding: '10px 0' }}>
            Thoughtful personalisation for any occasion
          </li>
        </ul>
      </div>
    </div>
  )
}


