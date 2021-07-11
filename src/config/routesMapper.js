import { lazy } from 'react';
import { constants } from '../constants';

import Feed from 'pages/Feed';

const { PROFILE, FEED, PROFILE_GENERAL, PROFILE_API, FEED_ARTICLE, FEED_INTERACTIONS } = constants.route;

const Profile = lazy(() => import('pages/Profile'));
const GeneralProfle = lazy(() => import('components/Account/General'));
const GeneralApi = lazy(() => import('components/Account/Api'));

const FeedArticles = lazy(() => import('components/Feeds/Articles'));
const FeedInteractions = lazy(() => import('components/Feeds/Interactions'));

export const mainRoutes = [
  {
    path: PROFILE,
    name: 'Profile',
    component: Profile,
    isPrivate: true,
  },
  {
    path: FEED,
    name: 'Feed',
    component: Feed,
    isPrivate: false,
  },
];

export const profileRoutes = [
  { path: PROFILE_GENERAL, component: GeneralProfle, isPrivate: true },
  {
    path: PROFILE_API,
    component: GeneralApi,
    isPrivate: true,
  },
];

export const feedRoutes = [
  { path: FEED_ARTICLE, component: FeedArticles, isPrivate: false },
  {
    path: FEED_INTERACTIONS,
    component: FeedInteractions,
    isPrivate: false,
  },
];
