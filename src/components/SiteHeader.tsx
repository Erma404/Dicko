import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import dickoLogo from "@/assets/dicko-logo.png";
import { useQuoteModal } from "@/lib/quote-modal-context";

const nav = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Le header se détache et disparaît dès que le footer entre dans le
  // viewport (iso prod) : un IntersectionObserver plutôt qu'un pur ratio
  // scroll/hauteur de page, pour que ça marche quel que soit la hauteur du
  // footer ou de la fenêtre (mobile, desktop, footer court ou long).
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
        if (entry.isIntersecting) setOpen(false);
      },
      { threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 px-3 pt-3 transition-transform duration-300 ease-in md:px-5 md:pt-4 ${
        footerVisible ? "-translate-y-[130%]" : "translate-y-0"
      }`}
      aria-hidden={footerVisible}
      inert={footerVisible ? true : undefined}
    >
      <header
        className={`band-ink mx-auto max-w-[1400px] rounded-[1.5rem] px-4 transition-shadow duration-300 md:px-6 ${
          scrolled ? "shadow-[0_22px_50px_-30px_rgba(20,20,25,0.65)]" : ""
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={dickoLogo}
              alt="Logo DICKO — plomberie, chauffage, VMC"
              width={500}
              height={500}
              className="h-9 w-9 shrink-0 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-[0.22em] text-foreground">
                DICKO
              </span>
              <span className="mt-1 hidden text-[9px] tracking-[0.24em] text-muted-foreground uppercase sm:inline">
                Plomberie • Chauffage • VMC
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "!text-gold" }}
                className="font-display text-[13px] font-semibold tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openQuoteModal}
              className="btn-gold hidden !px-5 !py-2.5 text-xs sm:inline-flex"
            >
              Demande de devis
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-border py-4 lg:hidden" aria-label="Navigation mobile">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "!text-gold" }}
                    className="block py-3 font-display text-sm font-semibold tracking-[0.1em] text-muted-foreground uppercase"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openQuoteModal();
                  }}
                  className="btn-gold w-full justify-center"
                >
                  Demande de devis
                </button>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
