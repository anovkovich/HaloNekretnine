"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

export default function AnalyticsProvider() {
  useEffect(() => {
    // --- Click delegation for data-track attributes ---
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("[data-track]");
      if (!target) return;

      const eventName = (target as HTMLElement).dataset.track;
      if (!eventName) return;

      const params: Record<string, string> = {};
      const el = target as HTMLElement;
      for (const key of Object.keys(el.dataset)) {
        if (key.startsWith("track") && key !== "track") {
          // Convert camelCase "trackCtaName" → "cta_name"
          const paramName = key
            .slice(5) // remove "track"
            .replace(/([A-Z])/g, "_$1")
            .toLowerCase()
            .replace(/^_/, "");
          params[paramName] = el.dataset[key]!;
        }
      }

      trackEvent(eventName, params);
    }

    document.addEventListener("click", handleClick);

    // --- Scroll depth tracking ---
    const scrollMilestones = new Set<number>();

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of [25, 50, 75, 100]) {
        if (percent >= milestone && !scrollMilestones.has(milestone)) {
          scrollMilestones.add(milestone);
          trackEvent("scroll_depth", {
            depth_percent: milestone,
            page_path: window.location.pathname,
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- Section visibility tracking ---
    const viewedSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.id) {
            const sectionId = entry.target.id;
            if (!viewedSections.has(sectionId)) {
              viewedSections.add(sectionId);
              trackEvent("section_view", {
                section_id: sectionId,
                page_path: window.location.pathname,
              });
            }
          }
        }
      },
      { threshold: 0.3 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    // --- FAQ interaction tracking ---
    function handleFaqChange(e: Event) {
      const input = e.target as HTMLInputElement;
      if (
        input.type === "checkbox" &&
        input.checked &&
        input.closest("#faq .collapse")
      ) {
        const collapse = input.closest(".collapse");
        const title = collapse?.querySelector(".collapse-title")?.textContent;
        if (title) {
          trackEvent("faq_interaction", {
            question: title.trim(),
          });
        }
      }
    }

    document.addEventListener("change", handleFaqChange);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      document.removeEventListener("change", handleFaqChange);
    };
  }, []);

  return null;
}
