"use client";

import { Flex, Icon, IconButton } from "@/once-ui/components";
import styles from "./about.module.scss";

// Add Cal.com type declarations
declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalendarButton() {
  const handleCalendarClick = () => {
    if (typeof window !== 'undefined' && window.Cal) {
      try {
        window.Cal.ns["30min"]("ui", {
          "cssVarsPerTheme": {
            "light": {"cal-brand": "#5A93FC"},
            "dark": {"cal-brand": "#5A93FC"}
          },
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      } catch (error) {
        console.error('Error opening Cal.com calendar:', error);
      }
    }
  };

  return (
    <Flex
      fitWidth
      border="brand-alpha-medium"
      className={styles.blockAlign}
      style={{
        backdropFilter: "blur(var(--static-space-1))",
        cursor: "pointer",
      }}
      background="brand-alpha-weak"
      radius="full"
      padding="4"
      gap="8"
      marginBottom="m"
      vertical="center"
      as="button"
      data-cal-link="talha-noman-hbszme/30min"
      data-cal-namespace="30min"
      data-cal-config='{"layout":"month_view"}'
      onClick={handleCalendarClick}
    >
      <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
      <Flex paddingX="8" style={{ color: 'white' }}>Schedule a call</Flex>
      <IconButton
        data-border="rounded"
        variant="secondary"
        icon="chevronRight"
      />
    </Flex>
  );
} 