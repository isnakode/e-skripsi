/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { nim } = params
  return { nim };
};