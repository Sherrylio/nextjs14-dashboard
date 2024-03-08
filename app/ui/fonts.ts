// This has all the fonts used in the app. Nextjs automatically download font files at
 // build time and put them in the public folder with other static assets

 import { Inter } from 'next/font/google';
 export const inter = Inter({ subsets: ['latin'] });

import { Lusitana } from 'next/font/google';
export const lusitana = Lusitana({ weight: ['400','700'], subsets: ['latin'] });