export async function GET(request: Request) {
  let offert = {};
  const id = 47574;
  const getTokenFlks = fetch(
    'https://folkshr.app/cvirtuose/Api/V1/Authentification/getToken/auacFsxJS0MwOkrvXpGRN2EGhhKOxhAZIhIhjolm?scopes=["Candidate.write","JobOffer.read","AllJobOffer.read", "Application.write"]'
  );
  const getToken = await getTokenFlks;
  const { error, token } = await getToken.json();
  if (error) {
    return Response.json({ success: false, error: true });
  } else {
    const getOffert = fetch(
      `https://folkshr.app/cvirtuose/Api/V1/JobOffer/${id}`,
      {
        headers: {
          Token: token,
        },
      }
    );
    const dataOffert = await getOffert;
    offert = await dataOffert.json();
  }

  return Response.json(offert);
}
