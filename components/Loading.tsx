import { LoadingIcon } from "./Icons";

export default function Loading({ text }: { text: string }) {
  return (
    <>
      <div
        className=" my-5 py-3 px-[12px] w-full flex gap-[12px] justify-center font-medium duration-150 ease-out hover:ease-in hover:scale-105 text-decasult-btndtext border-decasult-btnborder
        hover:text-decasult-graydark hover:border-decasult-btntext animate-bounce"
      >
        <LoadingIcon styles="animate-spin h-6 w-6 mr-1" />
        <span>{text}</span>
      </div>
    </>
  );
}
