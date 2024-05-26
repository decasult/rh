import { Offert, OffertPage } from "@/types/offert";
import ButtonApply from "./ButtonApply";

export default function OffertDescription({
  offert,
  handlePage,
}: {
  offert: Offert | undefined;
  handlePage: ({ page }: { page: OffertPage }) => void;
}) {
  return (
    <div>
      <div className="my-5 text-justify text-sm">
        {offert?.description && (
          <>
            <h2 className="mt-5 text-lg font-semibold text-decasult-graydark mb-4 underline">
              Description
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `<div>${offert?.description}</div>`,
              }}
            ></p>
          </>
        )}
      </div>

      <div className="my-5 text-justify text-sm offre">
        {offert?.complementary_description && (
          <>
            <p
              dangerouslySetInnerHTML={{
                __html: `<div>${offert?.complementary_description}</div>`,
              }}
            ></p>
          </>
        )}
      </div>

      <div className="flex items-center justify-center mt-10">
        <ButtonApply
          text="Postuler"
          onClick={() => handlePage({ page: "Postuler" })}
        />
      </div>
    </div>
  );
}
