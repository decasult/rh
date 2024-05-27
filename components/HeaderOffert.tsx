import ButtonApply from "./ButtonApply";

export default function HeaderOffert({
  title,
  city,
  pushished,
  hasRedirect,
  textButton,
  onClick,
}: {
  title: string;
  city: string;
  pushished: string;
  hasRedirect: boolean;
  textButton: string;
  onClick: () => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row items-center justify-between pb-3 ">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold text-decasult-graydark">
            {title}
          </h1>
          <div className="flex items-center justify-start gap-3 text-sm text-decasult-graydark ">
            <p>{city}</p>
            <span className="text-decasult-graydark font-semibold">|</span>
            <p>Publié {pushished}</p>
          </div>
        </div>
        {hasRedirect && <ButtonApply text={textButton} onClick={onClick} />}
      </div>

      <hr className=" mt-5 mb-10 rounded-sm border-decasult-primary " />
    </>
  );
}
