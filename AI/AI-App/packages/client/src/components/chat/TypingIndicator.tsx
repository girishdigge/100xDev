const TypingIndicator = () => {
  return (
    <div className="flex self-start gap-1 px-3 py-3 bg-gray-200 rounded-xl">
      <Dot />
      <Dot className="delay-50" />
      <Dot className="delay-100" />
    </div>
  );
};

type DotProps = {
  className?: string;
};
const Dot = ({ className }: DotProps) => (
  <div
    className={`w-2 h-2 rounded-full bg-gray-800 animate-bounce ${className}`}
  ></div>
);
export default TypingIndicator;
