export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-hover focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
