import { useState } from 'react'

export default function Content() {  // Capture the opening time once; this page does not run a clock timer.
  const [currentTime] = useState(() => new Date().toLocaleTimeString())

  return (
    <section>
      <h1>Hello World!</h1>
      <h2>It is {currentTime}.</h2>
    </section>
  )
}
