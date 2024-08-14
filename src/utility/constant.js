export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_TOKEN}`,
  },
};

export const BG_IMG =
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export const LOGO =
  'https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460';
export const PROFILE_LOGO =
  'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg';
export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500/';

export const SUPPORTED_LANG = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
  { identifier: 'spanish', name: 'Spanish' },
];

//Home
export const DOWNLOAD_SHOW_MAIN =
  'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg';

export const DOWNLOAD_STRANGER_THINGS =
  'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png';

export const DOWNLOAD_GIF =
  'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif';

export const ENJOY_ON_TV_IMG =
  'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png';

export const ENJOY_ON_TV_VIDEO =
  'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v';

export const KIDS_PROFILE =
  'https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d';

export const WATCH_EVERYWHERE_IMG =
  'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png';

export const WATCH_EVERYWHERE_VIDEO =
  'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v';
