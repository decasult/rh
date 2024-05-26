"use server";
import { NextRequest } from "next/server";

const API_KEY = process.env.API_KEY_SECRET_DSLT;

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log(formData.get("file"));
  console.log(formData);

  const getTokenFlks = fetch(
    `https://folkshr.app/cvirtuose/Api/V1/Authentification/getToken/${API_KEY}?scopes=["Candidate.write","JobOffer.read","AllJobOffer.read", "Application.write"]`,
    { cache: "no-store" }
  );
  const getToken = await getTokenFlks;
  const { error, token } = await getToken.json();
  if (error) {
    return Response.json({ success: false, error: true });
  } else {
    try {
      console.log("token", token);
      const getOffert = fetch(
        `https://folkshr.app/cvirtuose/Api/V1/Candidate`,
        {
          headers: {
            Token: token,
          },
          method: "POST",
          body: formData,
        }
      );
      const response = await getOffert;
      const result = await response.json();

      fetch(
        "https://folkshr.app/cvirtuose/Api/V1/Authentification/invalidateToken?token=" +
          token,
        { method: "POST" }
      );

      console.log(result);
    } catch (e) {
      console.log(e, "error in fetch");
    }
  }

  return Response.json(true);
}
