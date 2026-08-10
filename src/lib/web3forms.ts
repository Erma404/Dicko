/**
 * Web3Forms — même formulaire (et même clé) que sur le site en production.
 * Protection anti-spam : honeypot "botcheck" + hCaptcha (zero-config, voir use-hcaptcha.ts).
 */
export const WEB3FORMS_ACCESS_KEY = "d2f0287a-5f39-4c65-bbc1-d707442d5393";

export async function submitToWeb3Forms(payload: Record<string, unknown>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      botcheck: false,
      ...payload,
    }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.success) {
    throw new Error(data?.message || "Échec de l'envoi du formulaire");
  }
  return data;
}
