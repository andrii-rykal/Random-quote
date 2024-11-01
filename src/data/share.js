export function shareOnTelegram(quote) {
  const quoteText = encodeURIComponent(`${quote.quote} - ${quote.author}`);
  const telegramUrl = `https://t.me/share/url?url=${window.location.href}&text=${quoteText}`;
  window.open(telegramUrl, "_blank");
}

export function shareOnFacebook() {
  const currentUrl = window.location.href;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  window.open(facebookUrl, "_blank");
}