type RepliesCounterProps = {
  count: number;
  onClick?: () => void;
};

export default function RepliesCounter({
  count,
  onClick,
}: RepliesCounterProps) {
  if (!count || count == 0) {
    return (
      <div className="m-2 link-primary" onClick={onClick}>
        Se el primero en responder!{" "}
      </div>
    );
  }

  const label = count > 1 ? "respuestas" : "respuestas";

  return (
    <>
      <div className="link-primary" onClick={onClick}>
        {count} {label}
      </div>
    </>
  );
}
