"use client";

import Script from "next/script";

const ANAM_AGENT_ID = "87b51698-d73e-4798-a29c-c276a71d0628";

export function AnamWidget() {
  return (
    <>
      <Script
        src="https://unpkg.com/@anam-ai/agent-widget"
        strategy="lazyOnload"
      />
      {/* @ts-expect-error -- custom element */}
      <anam-agent agent-id={ANAM_AGENT_ID} />
    </>
  );
}
