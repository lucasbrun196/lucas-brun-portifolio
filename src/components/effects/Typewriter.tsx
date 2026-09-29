import { useEffect, useState } from 'react'

// Types each word, pauses, deletes it and moves to the next one.
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Restart when the language changes.
  useEffect(() => {
    setIndex(0)
    setLength(0)
    setDeleting(false)
  }, [words])

  const word = words[index % words.length] ?? ''

  useEffect(() => {
    let delay = deleting ? 38 : 85
    if (!deleting && length === word.length) delay = 1600
    if (deleting && length === 0) delay = 300

    const id = window.setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true)
      else if (deleting && length === 0) {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else setLength((l) => l + (deleting ? -1 : 1))
    }, delay)
    return () => window.clearTimeout(id)
  }, [length, deleting, word, words.length])

  return (
    <span className="typewriter">
      <span className="typewriter-text">{word.slice(0, length)}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  )
}
