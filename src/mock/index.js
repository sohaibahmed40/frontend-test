import {
  Accounts,
  CreditCards,
  Dashboard,
  Investments,
  Loans,
  Privileges,
  Services,
  Setting,
  Transactions,
} from '../assets/icons';
import { IMAGES } from '../assets/images';

export const MENU = [
  { id: 'Dashboard', title: 'Dashboard', Icon: Dashboard },
  { id: 'Transactions', title: 'Transactions', Icon: Transactions },
  { id: 'Accounts', title: 'Accounts', Icon: Accounts },
  { id: 'Investments', title: 'Investments', Icon: Investments },
  { id: 'Credit_Cards', title: 'Credit Cards', Icon: CreditCards },
  { id: 'Loans', title: 'Loans', Icon: Loans },
  { id: 'Services', title: 'Services', Icon: Services },
  { id: 'Privileges', title: 'My Privileges', Icon: Privileges },
  { id: 'Setting', title: 'Setting', Icon: Setting },
];

export const USERS = [
  { image: IMAGES.User_1, name: 'Livia Bator', title: 'CEO', admin: true },
  {
    image: IMAGES.User_2,
    name: 'Randy Press',
    title: 'Director',
    admin: false,
  },
  { image: IMAGES.User_3, name: 'Workman', title: 'Designer', admin: false },
  { image: IMAGES.User_4, name: 'Workman', title: 'Designer', admin: false },
  { image: IMAGES.User_5, name: 'Workman', title: 'Designer', admin: false },
];

export const TABS = [
  {
    title: 'Edit Profile',
    tab: 'Profile',
  },
  {
    title: 'Preferences',
    tab: 'Preferences',
  },
  {
    title: 'Security',
    tab: 'Security',
  },
];
