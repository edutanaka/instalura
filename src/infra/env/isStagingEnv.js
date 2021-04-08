const isServer = typeof window === 'undefined';

const isStagingEnv = isServer
  ? process.env.NODE_ENV === 'development'
  : globalThis.location.href.includes('localhost');

export const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app' // emv DEV
  : 'https://instalura-api-omariosouto.vercel.app'; // env PROD
