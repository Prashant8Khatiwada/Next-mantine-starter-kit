"use client";

import { useEffect, useState } from "react";
import { Transition, ActionIcon, Tooltip } from "@mantine/core";
import { ArrowUp } from "lucide-react";

type Props = {
  showAt?: number;   // px scrolled before showing the button
  offset?: number;   // distance from bottom-right
};

export default function BackToTopAffix({ showAt = 240, offset = 16 }: Props) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > showAt;
      setOpened(shouldShow);
      // Debug log (can be removed in production)
      if (process.env.NODE_ENV === 'development') {
        console.log(`Scroll: ${scrollY}px, Show at: ${showAt}px, Showing: ${shouldShow}`);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAt]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      style={{
        position: 'fixed',
        bottom: `${offset}px`,
        right: `${offset}px`,
        zIndex: 9999,
      }}
    >
      <Transition mounted={opened} transition="slide-up" duration={200} timingFunction="ease">
        {(styles) => (
          <Tooltip label="Back to top" position="top" withArrow>
            <ActionIcon
              style={styles}
              variant="filled"
              color="yellow"
              size="lg"
            radius="xl"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <ArrowUp size={18} />
          </ActionIcon>
          </Tooltip>
        )}
      </Transition>
    </div>
  );
}
