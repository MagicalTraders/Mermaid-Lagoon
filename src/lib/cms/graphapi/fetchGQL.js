export default async function fetchAPI(query, { variables } = {}) {
  const fetchURL = `${process.env.maroonersRockBase}/graphql`;
  const res = await fetch(fetchURL, {
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      Authorization:  `Bearer ${process.env.maroonersRockJWT}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
