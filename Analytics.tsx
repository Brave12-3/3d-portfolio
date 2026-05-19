"use client";
import Script from "next/script";

export default function Analytics() {
  // If you don't want analytics yet, you can leave this component empty.
  return (
    <>
      {/* Example: Plausible - replace domain */}
      <Script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js" />
    </>
  );
}
