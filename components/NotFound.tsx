export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="flex  items-center justify-center ">
        <h1 className=" inline-block margin-0 font-semibold text-xl">404</h1>
        <div className="m-2 font-semibold"> | </div>
        <div className="inline-block">
          <h2 className="text-lg">Cette page est introuvable.</h2>
        </div>
      </div>
      <a
        href="https://www.decasult.com/carrieres/"
        className="text-sm underline text-decasult-primary "
      >
        Retourner à www.decasult.com
      </a>
    </div>
  );
}
