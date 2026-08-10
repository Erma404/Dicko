import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Droplets,
  FileText,
  Flame,
  Fuel,
  Layers,
  Send,
  Wind,
  Wrench,
} from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useQuoteModal } from "@/lib/quote-modal-context";
import { useHCaptcha } from "@/hooks/use-hcaptcha";
import { submitToWeb3Forms } from "@/lib/web3forms";

const PHONE = "33615035300";
const STEPS = 4;

type Step = 1 | 2 | 3 | 4;

interface FormData {
  typeTravaux: string;
  surface: string;
  pieces: string;
  localisation: string;
  urgence: string;
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  description: string;
}

const TYPES = [
  { val: "Plomberie", Icon: Droplets },
  { val: "Chauffage", Icon: Flame },
  { val: "VMC", Icon: Wind },
  { val: "Réseau Gaz", Icon: Fuel },
  { val: "CVC Complet", Icon: Layers },
  { val: "Autre", Icon: Wrench },
];
const SURFACES = ["Moins de 100 m²", "100-200 m²", "200-500 m²", "500-1000 m²", "Plus de 1000 m²"];
const PIECES = ["1-2", "3-5", "6-10", "11-20", "Plus de 20"];
const URGENCES = [
  {
    val: "Normal",
    desc: "Délai standard",
    tint: "border-emerald-300 bg-emerald-50",
  },
  {
    val: "Rapide",
    desc: "Intervention prioritaire",
    tint: "border-amber-300 bg-amber-50",
  },
  {
    val: "Urgence",
    desc: "Intervention express",
    tint: "border-red-300 bg-red-50",
  },
];

const freshState = (): FormData => ({
  typeTravaux: "",
  surface: "",
  pieces: "",
  localisation: "",
  urgence: "",
  nom: "",
  entreprise: "",
  email: "",
  telephone: "",
  description: "",
});

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

export function QuoteModal() {
  const { isOpen, closeQuoteModal } = useQuoteModal();
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>(freshState());
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { containerRef: captchaRef, getToken } = useHCaptcha(step === 4);

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function reset() {
    setStep(1);
    setData(freshState());
    setStatus("idle");
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeQuoteModal();
      setTimeout(reset, 250);
    }
  }

  function isStepValid() {
    if (step === 1) return data.typeTravaux && data.surface && data.pieces;
    if (step === 2) return data.localisation.trim() && data.urgence;
    if (step === 3) return data.nom.trim() && data.email.trim() && data.telephone.trim();
    return true;
  }

  async function handleSubmit() {
    setStatus("sending");

    const summary =
      `Type : ${data.typeTravaux}\n` +
      `Surface : ${data.surface}\n` +
      `Pièces : ${data.pieces}\n` +
      `Localisation : ${data.localisation}\n` +
      `Urgence : ${data.urgence}`;

    const waMessage = encodeURIComponent(
      `Bonjour DICKO 👋\n\nNouvelle demande de devis :\n\n${summary}\n\n` +
        `Nom : ${data.nom}\n${data.entreprise ? `Entreprise : ${data.entreprise}\n` : ""}` +
        `Email : ${data.email}\nTéléphone : ${data.telephone}\n\n` +
        `Description : ${data.description || "Aucune description"}`,
    );

    try {
      await submitToWeb3Forms({
        "h-captcha-response": getToken(),
        subject: `Devis ${data.typeTravaux} — ${data.localisation} — ${data.nom}`,
        from_name: "Dicko BTP Site Web",
        name: data.nom,
        email: data.email,
        phone: data.telephone,
        entreprise: data.entreprise || "N/A",
        type_travaux: data.typeTravaux,
        surface: data.surface,
        pieces: data.pieces,
        localisation: data.localisation,
        urgence: data.urgence,
        description: data.description || "Aucune",
      });
      window.open(`https://wa.me/${PHONE}?text=${waMessage}`, "_blank");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg gap-0 overflow-hidden rounded-[1.75rem] border-border p-0 sm:max-w-xl">
        {status === "sent" ? (
          <SuccessPanel data={data} onClose={() => handleOpenChange(false)} />
        ) : (
          <>
            <div className="band-ink flex items-center gap-3 px-6 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold text-primary-foreground">
                <FileText className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold">Demande de devis</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Étape {step} sur {STEPS}
                </p>
              </div>
            </div>
            <div className="h-1 w-full bg-muted">
              <div
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${(step / STEPS) * 100}%` }}
              />
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-6 py-6">
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="text-sm font-semibold">Type de travaux *</label>
                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {TYPES.map(({ val, Icon }) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => set("typeTravaux", val)}
                          className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center text-xs font-medium transition-colors ${
                            data.typeTravaux === val
                              ? "border-gold bg-gold/10 text-foreground"
                              : "border-border text-muted-foreground hover:border-gold/50"
                          }`}
                        >
                          <Icon className="h-5 w-5 text-gold" strokeWidth={1.8} />
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="text-sm font-semibold">
                    Surface du chantier (m²) *
                    <select
                      className={inputClass}
                      value={data.surface}
                      onChange={(e) => set("surface", e.target.value)}
                    >
                      <option value="">Sélectionnez la surface</option>
                      {SURFACES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm font-semibold">
                    Nombre de pièces *
                    <select
                      className={inputClass}
                      value={data.pieces}
                      onChange={(e) => set("pieces", e.target.value)}
                    >
                      <option value="">Sélectionnez</option>
                      {PIECES.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </label>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <label className="text-sm font-semibold">
                    Localisation du chantier *
                    <input
                      type="text"
                      placeholder="Ex : Paris 19, 75019"
                      className={inputClass}
                      value={data.localisation}
                      onChange={(e) => set("localisation", e.target.value)}
                    />
                  </label>
                  <div>
                    <label className="text-sm font-semibold">Niveau d'urgence *</label>
                    <div className="mt-3 flex flex-col gap-2">
                      {URGENCES.map((u) => (
                        <button
                          key={u.val}
                          type="button"
                          onClick={() => set("urgence", u.val)}
                          className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${u.tint} ${
                            data.urgence === u.val
                              ? "ring-2 ring-foreground/70 ring-offset-2"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        >
                          <strong className="block text-foreground">{u.val}</strong>
                          <span className="text-xs text-foreground/70">{u.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-5">
                  <label className="text-sm font-semibold">
                    Nom complet *
                    <input
                      type="text"
                      placeholder="Ex : Jean Dupont"
                      className={inputClass}
                      value={data.nom}
                      onChange={(e) => set("nom", e.target.value)}
                    />
                  </label>
                  <label className="text-sm font-semibold">
                    Nom de l'entreprise <em className="font-normal text-muted-foreground">(optionnel)</em>
                    <input
                      type="text"
                      placeholder="Ex : Ma Société"
                      className={inputClass}
                      value={data.entreprise}
                      onChange={(e) => set("entreprise", e.target.value)}
                    />
                  </label>
                  <label className="text-sm font-semibold">
                    Email *
                    <input
                      type="email"
                      placeholder="Ex : jean.dupont@email.com"
                      className={inputClass}
                      value={data.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </label>
                  <label className="text-sm font-semibold">
                    Téléphone *
                    <input
                      type="tel"
                      placeholder="Ex : 06 12 34 56 78"
                      className={inputClass}
                      value={data.telephone}
                      onChange={(e) => set("telephone", e.target.value)}
                    />
                  </label>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-5">
                  <div className="rounded-xl bg-muted p-4">
                    <h3 className="font-display text-sm font-semibold">Récapitulatif</h3>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        Type : <strong>{data.typeTravaux}</strong>
                      </div>
                      <div>
                        Surface : <strong>{data.surface}</strong>
                      </div>
                      <div>
                        Pièces : <strong>{data.pieces}</strong>
                      </div>
                      <div>
                        Urgence : <strong>{data.urgence}</strong>
                      </div>
                    </div>
                  </div>
                  <label className="text-sm font-semibold">
                    Description du projet <em className="font-normal text-muted-foreground">(optionnel)</em>
                    <textarea
                      rows={4}
                      placeholder="Décrivez votre projet, vos contraintes spécifiques, les accès au chantier..."
                      className={inputClass}
                      value={data.description}
                      onChange={(e) => set("description", e.target.value)}
                    />
                  </label>
                  <div ref={captchaRef} />
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      L'envoi a échoué. Vérifiez votre connexion et réessayez.
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    En cliquant sur « Envoyer », votre demande sera transmise par email et vous
                    serez redirigé vers WhatsApp.
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border px-6 py-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="btn-ghost inline-flex items-center gap-2 text-sm"
                >
                  <ArrowLeft className="h-4 w-4" /> Retour
                </button>
              ) : (
                <span />
              )}
              {step < STEPS ? (
                <button
                  type="button"
                  disabled={!isStepValid()}
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  className="btn-gold inline-flex items-center gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continuer <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={status === "sending"}
                  onClick={handleSubmit}
                  className="btn-gold inline-flex items-center gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function SuccessPanel({ data, onClose }: { data: FormData; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 px-8 py-12 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
        <CheckCircle2 className="h-8 w-8" strokeWidth={1.8} />
      </span>
      <h2 className="font-display text-xl font-bold">Merci beaucoup !</h2>
      <p className="max-w-sm text-sm text-muted-foreground">
        Votre demande de devis pour <strong className="text-foreground">{data.typeTravaux}</strong>{" "}
        a bien été envoyée. Nous vous recontacterons sous 48h ouvrées.
      </p>
      <button type="button" onClick={onClose} className="btn-gold mt-2 text-sm">
        Fermer
      </button>
    </div>
  );
}
