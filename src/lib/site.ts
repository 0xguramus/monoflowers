import s from './settings.json';
export const SITE = s;
export const CATEGORIES = {
  'red-roses': 'წითელი ვარდები',
  'spray-roses': 'სპრეი ვარდები',
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
export const gel = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u2009')} ₾`;
export const sortProducts = <T extends { data: { available: boolean; order?: number | null } }>(a: T[]) => a.sort((x, y) => Number(y.data.available) - Number(x.data.available) || (x.data.order ?? 9999) - (y.data.order ?? 9999));
export const fmtDate = (d: Date) => `${d.getUTCDate()} ${['იანვარი','თებერვალი','მარტი','აპრილი','მაისი','ივნისი','ივლისი','აგვისტო','სექტემბერი','ოქტომბერი','ნოემბერი','დეკემბერი'][d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
