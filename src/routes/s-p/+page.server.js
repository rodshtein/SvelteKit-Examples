export async function load({ url }) {
  const color = url.searchParams.get('color')

  return {
    color: color
  }
}