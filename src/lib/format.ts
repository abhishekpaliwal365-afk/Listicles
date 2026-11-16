export function formatDate(date: Date, lang = 'en'): string {
  return date.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function readingMinutes(markdown: string | undefined): number {
  if (!markdown) return 1;
  const words = markdown.replace(/[#>*_`\[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function isNumberedItem(text: string): boolean {
  return /^\s*#?\d+[.)]?\s+/.test(text);
}

/** Strips a leading "1." / "1)" / "#1" from a heading, for clean ItemList names. */
export function cleanItemName(text: string): string {
  return text.replace(/^\s*#?\d+[.)]?\s*/, '').trim();
}
