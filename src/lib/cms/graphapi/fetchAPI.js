export default async function fetchAPI(query, { variables } = {}) {
  const res = await fetch('http://localhost:1337/graphql', {
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      Accept:         'application/json',
      // Authorization: `Bearer ${process.env.maroonersRockToken}`,
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
