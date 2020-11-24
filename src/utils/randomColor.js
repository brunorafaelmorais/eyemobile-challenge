export default function randomColor(alpha = 1) {
  const R = Math.floor(Math.random() * 255)
  const G = Math.floor(Math.random() * 255)
  const B = Math.floor(Math.random() * 255)

  return `rgba(${R}, ${G}, ${B}, ${alpha})`
}
