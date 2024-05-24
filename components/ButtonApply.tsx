export default function ButtonApply({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="w-32 h-10 rounded-sm border text-white font-semibold bg-decasult-primary hover:bg-decasult-primaryactive"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
