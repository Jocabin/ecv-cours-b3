export function capitalize(word) {
  return (
    word.charAt(0).toUpperCase() + word.slice(1).toString().replaceAll("-", " ")
  )
}
