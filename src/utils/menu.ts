import  { mdiCog, mdiViewDashboardOutline, mdiCashMultiple, mdiTagMultiple } from '@mdi/js';

export const menu = [
  {
    active: false,
    icon: mdiViewDashboardOutline,
    name: 'Dashboard',
    path: '/',
    title: 'Dashboard'
  },
  {
    active: false,
    icon: mdiCashMultiple,
    name: 'Transações',
    path: '/transaction',
    title: 'Transações'
  },
  {
    active: false,
    icon: mdiTagMultiple,
    name: 'Categorias',
    path: '/category',
    title: 'Categorias'
  },
];

export const userMenu = [
  {
    active: false,
    icon: mdiCog,
    name: 'Configurações',
    path: '/settings',
    title: 'Configurações'
  }
];
