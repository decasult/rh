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
      <div className="flex items-center justify-between pb-3 ">
        <h1 className="text-3xl font-semibold text-decasult-graydark">
          {title}
        </h1>
        {hasRedirect && <ButtonApply text={textButton} onClick={onClick} />}
      </div>
      <div className="flex items-center justify-start gap-3 text-sm text-decasult-graydark">
        <p>{city}</p>
        <span className="text-decasult-graydark font-semibold">|</span>
        <p>Publié {pushished}</p>
      </div>
      <hr className=" mt-5 mb-10 rounded-sm border-decasult-primary" />
    </>
  );
}
