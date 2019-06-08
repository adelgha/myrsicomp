export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}


export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Dashboard',  icon: 'ti-panel', class: '' },
  { path: 'clients', title: 'Clients',  icon:'ti-user', class: '' },
  { path: 'collaborateurs', title: 'collaborateurs',  icon:'ti-view-list-alt', class: '' },
  { path: 'adel', title: 'adel',  icon:'ti-view-list-alt', class: '' },
  /* { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
   { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
   { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
   { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
   { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },*/
];
