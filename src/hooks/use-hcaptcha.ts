import { useEffect, useRef, useState } from "react";

/** Clé hCaptcha "zero-config" de Web3Forms — aucun compte hCaptcha séparé nécessaire. */
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

declare global {
  interface Window {
    hcaptcha?: {
      render: (container: string | HTMLElement, params: { sitekey: string }) => string;
      getResponse: (widgetId?: string) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

function loadHcaptchaScript(): Promise<void> {
  if (window.hcaptcha) return Promise.resolve();
  const existing = document.querySelector('script[src*="hcaptcha.com/1/api.js"]');
  if (existing) {
    return new Promise((resolve) => {
      existing.addEventListener("load", () => resolve());
      if (window.hcaptcha) resolve();
    });
  }
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

/**
 * Rend un widget hCaptcha dans le conteneur référencé et expose son token courant.
 * `active` contrôle quand le widget doit être (re)monté — utile pour ne le rendre
 * qu'à l'étape finale d'un formulaire multi-étapes.
 */
export function useHCaptcha(active: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!active || !containerRef.current || widgetIdRef.current !== null) return;
    let cancelled = false;
    loadHcaptchaScript().then(() => {
      if (cancelled || !containerRef.current || !window.hcaptcha) return;
      widgetIdRef.current = window.hcaptcha.render(containerRef.current, {
        sitekey: HCAPTCHA_SITEKEY,
      });
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [active]);

  function getToken(): string {
    if (window.hcaptcha && widgetIdRef.current !== null) {
      return window.hcaptcha.getResponse(widgetIdRef.current);
    }
    return "";
  }

  function reset() {
    if (window.hcaptcha && widgetIdRef.current !== null) {
      window.hcaptcha.reset(widgetIdRef.current);
    }
  }

  return { containerRef, ready, getToken, reset };
}
