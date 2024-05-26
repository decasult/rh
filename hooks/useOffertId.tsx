import { Offert } from "@/types/offert";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function useOffertId({ offertId }: { offertId: string | null }) {
  const [offert, setOffert] = useState<Offert>();
  const [loading, setLoading] = useState(true);

  const getOffert = async ({ offertId }: { offertId: string }) => {
    setLoading(true);
    if (!offertId) return;
    let published = "";
    const dataOffert = await fetch(
      BASE_URL + `/api/getinfo?offertId=${offertId}`
    );
    const offert = await dataOffert.json();
    const datePublished = offert?.job?.creation_date || new Date();
    if (!offert.error) {
      if (offert.job.creation_date) {
        published = new Date(datePublished).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      setOffert({ ...offert.job, published: published });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!offertId) return;
    getOffert({ offertId });
  }, []);

  return {
    offert,
    loading,
  };
}
