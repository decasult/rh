"use client";

import ButtonApply from "./ButtonApply";

export default function Apply() {
  return (
    <>
      {}
      <form className="flex flex-col gap-5">
        <div>
          <label htmlFor="first_name" className="label-decasult">
            Prénom <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input className="input-decasult" type="text" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name" className="label-decasult">
            Nom <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input className="input-decasult" type="text" id="last_name" />
        </div>
        <div>
          <label htmlFor="email" className="label-decasult">
            Courriel <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input className="input-decasult" type="text" id="email" />
        </div>
        <div>
          <label htmlFor="cell_phone_number" className="label-decasult">
            Téléphone <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input
            className="input-decasult"
            type="text"
            id="cell_phone_number"
          />
        </div>
        <div>
          <label
            className="label-decasult block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Cuirriculum Vitae <span className="text-[#eb1c24] text-lg">*</span>
          </label>
          <input
            className="text-sm border w-full file:cursor-pointer cursor-pointer text-slate-500
            file:mr-4 file:py-2 file:px-4
             file:border-0
            file:text-sm file:font-semibold
            file:bg-decasult-primary file:text-white
            hover:file:bg-decasult-primaryactive"
            id="file_input"
            type="file"
          />
        </div>
        <div>
          <label
            className="label-decasult block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Lettre de présentation
          </label>
          <input
            className="text-sm border w-full file:cursor-pointer cursor-pointer text-slate-500
            file:mr-4 file:py-2 file:px-4
             file:border-0
            file:text-sm file:font-semibold
            file:bg-decasult-primary file:text-white
            hover:file:bg-decasult-primaryactive"
            id="file_input"
            type="file"
          />
        </div>

        <div className="mt-5 ">
          <input
            id="red-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 accent-red-700 cursor-pointer"
          />

          <label
            htmlFor="red-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <span className="text-sm text-justify mt-5 cursor-pointer ">
              Je donne mon consentement et autorise DECASULT, ainsi que ses
              filiales, agents et mandataires respectifs, à collecter, mettre à
              jour, conserver et utiliser mes informations personnelles dans le
              cadre du processus de recrutement de DECASULT et à contacter les
              références fournies.
              <br /> Les informations recueillies lors d’une candidature seront
              utilisées pour évaluer l’adéquation du candidat avec les postes
              actuels et futurs chez DECASULT. Ces données seront conservées
              pendant une durée maximale de 2 ans. Si DECASULT souhaite les
              conserver au-delà de cette période, le candidat sera contacté pour
              obtenir son accord. <br /> Si le candidat désire à tout moment que
              DECASULT supprime ou partage les informations collectées, il peut
              en faire la demande par courriel à l’adresse suivante :
              rh@decasult.com. <br />
              Pour toute information complémentaire concernant le traitement des
              données personnelles, veuillez consulter la Politique de
              confidentialité de DECASULT, disponible sur le site internet de
              l’entreprise.
            </span>
          </label>
        </div>

        <div className="my-10 flex items-center justify-center">
          <ButtonApply text="Envoyer" onClick={() => {}} />
        </div>
      </form>
    </>
  );
}
