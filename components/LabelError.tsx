export default function LabelError({
  message,
}: {
  message: string | undefined;
}) {
  return <div className="label-error">{message}</div>;
}
