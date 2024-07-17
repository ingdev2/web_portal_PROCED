export const maskEmail = (email: string | undefined): string | undefined => {
  if (email) {
    const [localPart, domain] = email.split("@");

    const halfLength = Math.floor(localPart.length / 2);

    const visiblePart = localPart.substring(0, halfLength);
    const maskedPart = "*".repeat(localPart.length - halfLength);

    return `${visiblePart}${maskedPart}@${domain}`;
  }
  return undefined;
};
