const env = import.meta.env;

const normalizePhone = (value: string) => value.replace(/\D/g, "");
const whatsappPhone = normalizePhone(env.VITE_CONTACT_WHATSAPP || "5547988730611");
const whatsappMessage =
  env.VITE_CONTACT_WHATSAPP_MESSAGE ||
  "Hi Jhonatan! I found your portfolio and would like to discuss a project.";

const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

export const siteConfig = {
  displayName: "Jhonatan Gasperi",
  legalName: "JHONATAN GASPERI DE OLIVEIRA LTDA",
  cnpj: "65.610.762/0001-55",
  businessAddress: "Thera Office · Rua Paes Leme, 215 · Pinheiros · São Paulo, SP · Brazil",
  email: env.VITE_CONTACT_EMAIL || "contato@jotage.site",
  whatsappPhone,
  whatsappUrl,
  linkedinUrl: env.VITE_LINKEDIN_URL || "",
  profilePhotoUrl: env.VITE_PROFILE_PHOTO_URL || "",
  links: {
    fiverrProfile: env.VITE_FIVERR_PROFILE || "",
    directContact: whatsappUrl,
    gigs: {
      landingAudit: env.VITE_FIVERR_GIG_LANDING_AUDIT || "",
      n8nFollowUp: env.VITE_FIVERR_GIG_N8N || "",
      acquisitionSystem: env.VITE_FIVERR_GIG_ACQUISITION || "",
    },
  },
} as const;

export type LinkKey =
  | "fiverrProfile"
  | "directContact"
  | "landingAudit"
  | "n8nFollowUp"
  | "acquisitionSystem";

const lookupLink = (key: LinkKey) => {
  const lookup = {
    fiverrProfile: siteConfig.links.fiverrProfile,
    directContact: siteConfig.links.directContact,
    landingAudit: siteConfig.links.gigs.landingAudit,
    n8nFollowUp: siteConfig.links.gigs.n8nFollowUp,
    acquisitionSystem: siteConfig.links.gigs.acquisitionSystem,
  } as const;

  return lookup[key].trim();
};

export const getConfiguredLink = (key: LinkKey) => {
  const value = lookupLink(key);
  return value.length > 0 ? value : "#contact";
};

export const hasConfiguredLink = (key: LinkKey) => lookupLink(key).length > 0;
