/**
 * STEC Technology Fund — single site config.
 *
 * Swap values here. Rebuild. No other file should hold the cash URL,
 * hardware-form placeholder, raised/goal figures, or visitor-facing copy.
 *
 * ---------------------------------------------------------------------------
 * TECH_FUND_URL is LOCKED. Every primary white Give / Donate CTA must open
 * this official SCAD Giving link in a new tab. Do not invent a different
 * cash URL. This site does not collect payments.
 *
 * HARDWARE_FORM_URL is a PLACEHOLDER. Equipment / compute is a quieter
 * secondary path. Leave `#hardware` until the separate form exists.
 *
 * GOAL_AMOUNT and RAISED_AMOUNT may stay bracketed placeholders until
 * Advancement sends live figures.
 * ---------------------------------------------------------------------------
 */

/** Official SCAD Giving — Applied AI and Robotics / Technology Fund. LOCKED. */
export const TECH_FUND_URL =
  'https://www.scad.edu/about/giving/donate?d=AIANDROBS';

/** Placeholder until the equipment / compute form ships. */
export const HARDWARE_FORM_URL = '#hardware';

/** Display until Advancement reports a live total. Number or `[RAISED_AMOUNT]`. */
export const RAISED_AMOUNT: number | string = '[RAISED_AMOUNT]';

/** Display until Advancement confirms the goal. Number or `[GOAL_AMOUNT]`. */
export const GOAL_AMOUNT: number | string = '[GOAL_AMOUNT]';

/** Optional. Empty string hides the "by …" clause on the goal strip. */
export const DEADLINE_TEXT = '';

export const GIVING_CONTACT_EMAIL = 'scadgiving@scad.edu';
export const PRIVACY_URL = 'https://www.scad.edu/privacy';
export const SCAD_URL = 'https://www.scad.edu';
export const STEC_URL =
  'https://www.scad.edu/academics/academic-schools/school-creative-technology';

export const site = {
  name: 'Build Tomorrow',
  school: 'SCAD School of Creative Technology',
  org: 'Savannah College of Art and Design',
  tagline:
    'Fund AI and robotics education at SCAD — gifts go to Applied AI and Robotics classrooms.',
};

export const copy = {
  eyebrow: 'SCAD School of Creative Technology',
  h1: 'Build Tomorrow.',
  sub: 'Fund AI and robotics education at SCAD — gifts go to Applied AI and Robotics classrooms.',
  primaryCta: 'Give to the Technology Fund',
  secondaryCta: 'Donate equipment or compute',
  hardwareEyebrow: 'Equipment and compute',
  hardwareTitle: 'Donate equipment or compute',
  hardwareBody:
    'A separate form will take hardware and GPU-hour pledges. Cash gifts use official SCAD Giving only.',
  hardwareSoon: 'Form coming soon.',
  finePrint501:
    'The Savannah College of Art and Design is a 501(c)(3) nonprofit organization. Your gift is tax-deductible to the extent allowed by law. Cash gifts are processed by SCAD Giving — this page does not collect payments.',
  giftsEyebrow: 'What gifts buy',
  giftsTitle: 'Cash lands in the classroom.',
  closeNote:
    'Gifts go to Applied AI and Robotics classrooms at the School of Creative Technology.',
};

/** Three short lines. Edit here if Advancement tightens the list. */
export const whatGiftsBuy = [
  'Workstations and training time in Applied AI classrooms.',
  'Kits, sensors, and bench hardware in Robotics.',
  'The rooms where students build the work that goes on stage.',
] as const;

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format a config amount. Numbers become currency; placeholders keep their brackets. */
export function displayAmount(value: number | string): string {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return formatUsd(value);
  }
  const text = String(value).trim();
  if (!text) return '$[AMOUNT]';
  if (text.startsWith('$')) return text;
  return `$${text}`;
}

export function isHttpUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export function isPlaceholderUrl(url: string): boolean {
  return !url || url === '#' || url.startsWith('#');
}
