"use client";

import Apply from "@/components/Apply";
import HeaderOffert from "@/components/HeaderOffert";
import Loading from "@/components/Loading";
import OffertDescription from "@/components/OffertDescription";
import useOffertId from "@/hooks/useOffertId";
import { OffertPage } from "@/types/offert";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Suspense } from "react";
import NotFound from "@/components/NotFound";

export default function Searchbar() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}

function Home() {
  const [page, setPage] = useState<OffertPage>("Offre");
  const searchParams = useSearchParams();
  const offertId = searchParams.get("id");
  const { offert, loading } = useOffertId({ offertId: offertId });

  const handlePage = ({ page }: { page: OffertPage }) => {
    const newPage = page === "Offre" ? "Postuler" : "Offre";
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  if (!offertId) {
    return <NotFound />;
  }

  return (
    <>
      <main className="mt-5 mb-5 w-full border rounded-md bg-white min-h-lvh px-5 md:px-10 py-10">
        {loading ? (
          <Loading text="Chargement de l'offre" />
        ) : (
          <>
            {offert?.title && (
              <HeaderOffert
                title={offert?.title}
                city={offert?.facility_city}
                pushished={offert?.published}
                hasRedirect={true}
                textButton={page === "Postuler" ? "Offre" : "Postuler"}
                onClick={() => handlePage({ page })}
              />
            )}
            {page === "Offre" ? (
              <OffertDescription
                offert={offert}
                handlePage={() => handlePage({ page })}
              />
            ) : (
              <>
                <Apply job_id={offert?.id} setPage={setPage} />
              </>
            )}
          </>
        )}
      </main>
      <div className="text-gray-500 text-sm text-center mt-2 mb-5 font-semibold">
        Powered by @DECASULT
      </div>
    </>
  );
}
