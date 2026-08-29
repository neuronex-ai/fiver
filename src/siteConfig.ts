export const siteConfig = {
  displayName: "Jhonatan Oliveira",
  links: {
    fiverrProfile: "",
    directContact: "",
    gigs: {
      landingAudit: "",
      n8nFollowUp: "",
      acquisitionSystem: "",
    },
  },
} as const;

export type LinkKey =
  | "fiverrProfile"
  | "directContact"
  | "landingAudit"
  | "n8nFollowUp"
  | "acquisitionSystem";

export const getConfiguredLink = (key: LinkKey) => {
  const lookup = {
    fiverrProfile: siteConfig.links.fiverrProfile,
    directContact: siteConfig.links.directContact,
    landingAudit: siteConfig.links.gigs.landingAudit,
    n8nFollowUp: siteConfig.links.gigs.n8nFollowUp,
    acquisitionSystem: siteConfig.links.gigs.acquisitionSystem,
  } as const;

  const value = lookup[key].trim();
  return value.length > 0 ? value : "#contact-setup";
};

export const hasConfiguredLink = (key: LinkKey) =>
  getConfiguredLink(key) !== "#contact-setup";
