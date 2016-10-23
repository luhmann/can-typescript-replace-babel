export async function getPost(id) {
  let response = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
  return await response.json()
}
