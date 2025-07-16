import shonenstream from './assets/shonenstream2.png'
import shonenstream2 from './assets/shonenstream1.png'
import shonenstream3 from './assets/shonenstream-auth-context.png'
import shonenstream4 from './assets/shonenstream-form-validation.png'
import shonenstream5 from './assets/shonenstream-redis-cache.png'

import roamlog from './assets/roamlog1.png'
import roamlog1 from './assets/roamlog2.png'
import roamlog2 from './assets/roamlog3.png'
import roamlog3 from './assets/roamlog4.png'

// Logos Import
import nextLogo from './assets/nextjs-logo.png'
import redisLogo from './assets/redis-logo.png'
import nodeLogo from './assets/nodejs-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import expressLogo from './assets/express-logo.png'
import typeLogo from './assets/typescript.png'
import reactLogo from './assets/react-logo.png'
import fireLogo from './assets/firebase-logo.png'
import { GithubLogo, Link } from 'phosphor-react'

export const projects = [
    {
        id: 1,
        title: 'Shonenstream',
        description: `<p><strong>Shonenstream</strong> is a modern anime streaming platform built to provide a smooth ad-free experience for discovering, watching and interacting with anime content. The frontend is developed using <span className='logo'>NextJs <img src='${nextLogo}'' alt="next-logo" width='30' height='30'/></span> for SEO optimization, speed and responsiveness, while the backend is split into two.<<br/><ol>
            <li><strong>Authentication Server</strong> - The server handles user login, signup, email verification, password reset, comments, book mark and profile management using JWT for authentication, <span className='logo'>Redis <img src='${redisLogo}' alt='redis-logo' width='30' height='30'/></span> for Caching user profile data and <span className='logo'>MongoDb <img src='${mongoLogo}' alt='mongo-logo' width='40' height='40'/></span> for persistent user data.</li>
            <li><strong>Scraper Server</strong> - Crawls anime information from different sources and provides images, titles, description and streaming links.</li>
        </ol><br/>Users can search for anime, stream episodes directly in browser with a custom video player, bookmark favorite anime and leave comments. The platform supports mobile device.<br/>This setup separates concerns, ensures better scalability, and give a fast experience to anime fans around the world.<p>`,
        cover: shonenstream,
        tag: [nextLogo, typeLogo, nodeLogo, expressLogo, redisLogo, mongoLogo],
        links: [
            { name: 'Github', link: 'https://github.com/Karl-Xavier/Shonenstream-Remake.git', icon: <GithubLogo size={22} weight='fill'/> },
        ],
        otherImages: [shonenstream2, shonenstream3, shonenstream4, shonenstream5]
    },
    {
        id: 2,
        title: 'Roamlog - A Travel Journal',
        description: `<p>Welcome to <strong>Roamlog</strong> a fullstack project built as a collaborative travel journal platform where users can document their adventures, upload photos, and create albums. The frontend is developed using <span className='logo w-full m-0'>React <img src='${reactLogo}'' alt="react-logo" width='30' height='30'/></span>and <span className='logo w-full'>Typescript <img src='${typeLogo}'' alt="typescript-logo" width='30' height='30'/></span>for type safety.<br/>Firebase is used for Authentication and database<br/>Users can create accounts, memories and photo albums and also view and interact with other memories. The website integrates maps to pinpoint travel location and Open Map api to generate location autocomplete</p>`,
        cover: roamlog,
        tag: [reactLogo, typeLogo, fireLogo],
        links: [
            {
                name: 'Github', link: 'https://github.com/Karl-Xavier/roamlog.git', icon: <GithubLogo size={22} weight='fill'/>
            },
            {
                name: 'Link', link: 'https://roamlog-journal.vercel.app', icon: <Link weight='bold' size={22}/>
            }
        ],
        otherImages: [roamlog1, roamlog2, roamlog3]
    }
]