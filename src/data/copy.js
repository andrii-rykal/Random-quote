export const copyToClipboard = (quote) => {
  if (quote) {
    navigator.clipboard.writeText(`${quote.quote} (${quote.author})`);
  }
};