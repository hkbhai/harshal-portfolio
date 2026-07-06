/**
 * LogoMark — "HK" monogram logo.
 * Works perfectly in both light and dark themes.
 * Uses currentColor so it adapts to any context.
 */
export function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background square with primary color */}
      <rect width="40" height="40" rx="10" fill="var(--primary)" />

      {/* H letter */}
      <path
        d="M8 10 L8 30 M8 20 L17 20 M17 10 L17 30"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* K letter */}
      <path
        d="M21 10 L21 30 M21 20 L32 10 M21 20 L32 30"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * LogoFull — LogoMark + "Harshal" wordmark side by side.
 */
export function LogoFull({ className }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className="h-8 w-8 flex-shrink-0" />
      <span className="text-[17px] font-bold tracking-tight text-foreground">
        Harshal
        <span className="text-primary">.</span>
      </span>
    </span>
  );
}
