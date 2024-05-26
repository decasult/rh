const API_KEY = process.env.API_KEY_SECRET_DSLT;

export async function GET(request: Request) {
  let offert = {};
  let id = 46968;
  const { searchParams } = new URL(request.url);
  const dataId = searchParams.get("offertId");
  console.log(dataId);
  id = dataId ? parseInt(dataId) : id;
  const getTokenFlks = fetch(
    `https://folkshr.app/cvirtuose/Api/V1/Authentification/getToken/${API_KEY}?scopes=["Candidate.write","JobOffer.read","AllJobOffer.read", "Application.write"]`,
    {
      cache: "no-store",
    }
  );
  const getToken = await getTokenFlks;

  const { error, token, expirationDate } = await getToken.json();
  if (error) {
    return Response.json({ success: false, error: true });
  } else {
    console.log("token in getid", token, expirationDate);
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
    fetch(
      "https://folkshr.app/cvirtuose/Api/V1/Authentification/invalidateToken?token=" +
        token,
      { method: "POST" }
    );
  }

  return Response.json(offert);
}
