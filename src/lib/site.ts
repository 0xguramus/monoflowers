import s from './settings.json';
export const SITE = s;
export const CATEGORIES = {
  bouquets: 'თაიგულები',
  boxes: 'ყუთები',
  single: 'ცალი ყვავილები',
  compositions: 'კომპოზიციები',
  gifts: 'საჩუქრები',
} as const;
export type Cat = keyof typeof CATEGORIES;
export const phoneHref = () => 'tel:' + SITE.phone.replace(/[^\d+]/g, '');
export const waHref = (text = '') => `https://wa.me/${SITE.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : '');
export const igHref = () => `https://instagram.com/${SITE.instagram}`;
export const gel = (n: number) => `${n} ₾`;
