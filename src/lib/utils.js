import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names and resolves Tailwind conflicts.
 * @param  {...(string | undefined | null | false)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with a plus suffix.
 * @param {number} value
 * @returns {string}
 */
export function formatWithPlus(value) {
  return `${value}+`;
}
