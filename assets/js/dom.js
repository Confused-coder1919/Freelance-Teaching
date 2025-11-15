export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

export const setCurrentYear = (selector = '#year') => {
  const target = $(selector);
  if (target) target.textContent = new Date().getFullYear();
};
