"use client";

import { ApplyOffert, OffertPage } from "@/types/offert";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import LabelError from "./LabelError";
import Loading from "./Loading";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export default function Apply({
  job_id,
  setPage,
}: {
  job_id: string | undefined;
  setPage: (page: OffertPage) => void;
}) {
  const [loadingApply, setLoadingApply] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyOffert>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ApplyOffert> = async (data) => {
    setLoadingApply(true);
    const formApplication = new FormData();
    // @ts-ignore
    formApplication.append("cv", data.cv[0]);
    // @ts-ignore
    formApplication.append("il", data.il[0]);
    formApplication.append("job_offer_id", job_id || "");
    formApplication.append("first_name", data.first_name);
    formApplication.append("last_name", data.last_name);
    formApplication.append("email", data.email);
    formApplication.append("cell_phone_number", data.cell_phone_number);
    formApplication.append("terms", data.terms);

    const response = await fetch(BASE_URL + "/api/apply", {
      method: "POST",
      body: formApplication,
    });
    const application = await response.json();
    console.log(application);
    toast.success("Votre candidature a été envoyée avec succès", {
      description: "Nous vous remercions pour votre intérêt",
    });
    setPage("Offre");
    window.scrollTo(0, 0);
    setLoadingApply(false);
  };

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="first_name" className="label-decasult">
            Prénom <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input
            className={`input-decasult ${
              errors["first_name"] ? " input-decasult-error " : ""
            }`}
            type="text"
            id="first_name"
            {...register("first_name", { required: true })}
          />
          <div className="h-1">
            {errors["first_name"] && (
              <LabelError message="Ce champ est obligatoire" />
            )}
          </div>
        </div>
        <div>
          <label htmlFor="last_name" className="label-decasult">
            Nom <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input
            className={`input-decasult ${
              errors["last_name"] ? " input-decasult-error " : ""
            }`}
            type="text"
            id="last_name"
            {...register("last_name", { required: true })}
          />
          <div className="h-1">
            {errors["last_name"] && (
              <LabelError message="Ce champ est obligatoire" />
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="label-decasult">
            Courriel <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input
            className={`input-decasult ${
              errors["email"] ? " input-decasult-error " : ""
            }`}
            type="text"
            id="email"
            {...register("email", {
              required: { value: true, message: "Ce champ est obligatoire" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message:
                  "La valeur saisie ne correspond pas au format de l'e-mail",
              },
            })}
          />
          <div className="h-1">
            {errors["email"] && (
              <LabelError message={errors["email"].message} />
            )}
          </div>
        </div>
        <div>
          <label htmlFor="cell_phone_number" className="label-decasult">
            Téléphone <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input
            className={`input-decasult ${
              errors["cell_phone_number"] ? " input-decasult-error " : ""
            }`}
            type="text"
            id="cell_phone_number"
            {...register("cell_phone_number", {
              required: { value: true, message: "Ce champ est obligatoire" },
              pattern: {
                value: /^(?=(\D*\d){1,12}$)(0|[1-9]\d*)(\.\d+)?$/,
                message:
                  "La valeur saisie ne correspond pas à un numéro de téléphone",
              },
            })}
          />
          <div className="h-1">
            {errors["cell_phone_number"] && (
              <LabelError message={errors["cell_phone_number"].message} />
            )}
          </div>
        </div>
        <div>
          <label
            className="label-decasult block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Cuirriculum Vitae <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input
            className={`text-sm border w-full file:cursor-pointer cursor-pointer text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-decasult-primary file:text-white hover:file:bg-decasult-primaryactive ${
              errors["cv"] ? " input-decasult-error " : ""
            }`}
            id="file_input"
            type="file"
            {...register("cv", { required: true })}
            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          <div className="h-1">
            {errors["cv"] && <LabelError message="Ce champ est obligatoire" />}
          </div>
        </div>
        <div>
          <label
            className="label-decasult block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Lettre de présentation
          </label>
          <input
            className={`text-sm border w-full file:cursor-pointer cursor-pointer text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-decasult-primary file:text-white hover:file:bg-decasult-primaryactive ${
              errors["il"] ? " input-decasult-error " : ""
            }`}
            id="file_input"
            type="file"
            {...register("il")}
            accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
        </div>

        <div className="mt-5 ">
          <input
            type="checkbox"
            id="red-checkbox"
            {...register("terms", { required: true })}
            className={`w-4 h-4 accent-red-700 cursor-pointer`}
          />

          <label
            htmlFor="red-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <span
              className={`text-xs text-decasult-graydark text-justify mt-5 cursor-pointer ${
                errors["terms"] && "text-red-500"
              }`}
            >
              Je consens expressément à ce que DECASULT INC. collecte, utilise,
              mette à jour, transmette, si requis mes informations personnelles
              dans le cadre du processus de recrutement de DECASULT et à
              contacter les références fournies et ce conformément à la loi sur
              la protection des renseignements personnels dans le secteur privé
              (LPRPSP) du Québec.
              <br />
              Les informations recueillies lors d’une candidature seront
              utilisées pour évaluer l’adéquation du candidat avec les postes
              actuels et futurs chez DECASULT. Ces données seront
              conservéespendant une durée maximale de 2 ans. Si DECASULT
              souhaite les conserver au-delà de cette période, le candidat sera
              contacté pour obtenir son accord.
              <br />
              Si le candidat désire à tout moment que DECASULT supprime ou
              partage les informations collectées, il peut en faire la demande
              par courriel à l’adresse suivante : rh@decasult.com. <br /> Pour
              toute information complémentaire concernant le traitement des
              données personnelles, veuillez consulter la Politique de
              confidentialité de DECASULT, disponible sur le site internet de
              l’entreprise.
            </span>
          </label>
        </div>

        <div className="flex items-center justify-center mt-5">
          {loadingApply ? (
            <Loading text="Nous enregistrons votre candidature" />
          ) : (
            <button
              type="submit"
              className="w-32 h-10 rounded-sm border text-white font-semibold bg-decasult-primary hover:bg-decasult-primaryactive"
            >
              Postuler
            </button>
          )}
        </div>
      </form>
    </>
  );
}
