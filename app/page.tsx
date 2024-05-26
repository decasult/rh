"use client";

import ButtonApply from "@/components/ButtonApply";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <main className=" mt-5 mb-10 w-full border rounded-md bg-white min-h-screen p-10">
        <div className="flex items-center justify-between pb-3">
          <h1 className="text-3xl font-semibold text-decasult-graydark">
            Contrôleur de projet
          </h1>
          <ButtonApply text="Postuler" onClick={() => router.push("/offert")} />
        </div>
        <div className="flex items-center justify-start gap-3 text-sm text-decasult-btnborder">
          <p>Temp partiel</p>|<p>Publié le 08 avril</p>
        </div>
        <hr className=" mt-5 rounded-sm border-decasult-primary" />
        <div>
          <h2 className="mt-10 text-lg font-semibold text-decasult-graydark">
            Description
          </h2>
        </div>

        <div>
          <h2 className="mt-10 text-lg font-semibold text-decasult-graydark">
            {"Offre d'emploi"}
          </h2>
          <div></div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <ButtonApply text="Postuler" />
        </div>
      </main>
    </>
  );
}
