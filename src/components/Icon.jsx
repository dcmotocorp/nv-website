// Single inline-SVG icon set. Stroke icons on a 24-grid, matching the
// 1.8 stroke weight used in the reference design.

const paths = {
  chart: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M3 12h4M17 12h4M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 19H7a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17.1 10a4.5 4.5 0 0 1 .4 9z" />
    </>
  ),
  code: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />,
  arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
  arrowLeft: <path d="M19 12H5M12 19l-7-7 7-7" />,
  arrowUpRight: <path d="M7 17L17 7M9 7h8v8" />,
  check: <path d="M20 6L9 17l-5-5" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 3z" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0M16.5 5.2a3.2 3.2 0 0 1 0 5.6M18 20a5.6 5.6 0 0 0-2.4-4.6" />
    </>
  ),
  bank: (
    <>
      <path d="M3 10l9-6 9 6M5 10v9M19 10v9M9 19v-5M15 19v-5M3 21h18" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l5 3V10l5 3V8l5 3v10z" />
      <path d="M7 21v-3M12 21v-3M17 21v-3M3 21h18" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  health: <path d="M12 21C7 18 3 14.5 3 10a4.5 4.5 0 0 1 9-1.6A4.5 4.5 0 0 1 21 10c0 4.5-4 8-9 11z" />,
  ruler: (
    <>
      <path d="M3 15.5L15.5 3 21 8.5 8.5 21z" />
      <path d="M7 11.5l2 2M10.5 8l2 2M14 4.5l2 2" />
    </>
  ),
  handover: (
    <>
      <path d="M3 12h7l2-3 2 6 2-3h5" />
      <path d="M6 7V5h12v2M6 17v2h12v-2" />
    </>
  ),
  speak: (
    <>
      <path d="M4 5h16v10H9l-5 4z" />
      <path d="M9 9h6M9 12h3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a9 9 0 1 1 16 0" />
      <path d="M12 18l4-6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 12h18M9 7V5h6v2" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, style, ...rest }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ flex: 'none', ...style }}
      {...rest}
    >
      {content}
    </svg>
  );
}
