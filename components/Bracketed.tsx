interface BracketedProps {
  children: React.ReactNode;
  className?: string;
}

export function Bracketed({ children, className = "" }: BracketedProps) {
  return (
    <div className={`bracketed ${className}`}>
      <span className="bx bx-tl" />
      <span className="bx bx-tr" />
      <span className="bx bx-bl" />
      <span className="bx bx-br" />
      {children}
    </div>
  );
}
