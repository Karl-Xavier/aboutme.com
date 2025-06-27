import shonenstream from './assets/shonenstream2.png'
import shonenstream2 from './assets/shonenstream1.png'
import shonenstream3 from './assets/shonenstream-auth-context.png'
import shonenstream4 from './assets/shonenstream-form-validation.png'
import shonenstream5 from './assets/shonenstream-redis-cache.png'

// Logos Import
import nextLogo from './assets/nextjs-logo.png'
import redisLogo from './assets/redis-logo.png'
import nodeLogo from './assets/nodejs-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import expressLogo from './assets/express-logo.png'
import typeLogo from './assets/typescript.png'
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
        tag: [nextLogo, typeLogo, nodeLogo, expressLogo,redisLogo, mongoLogo],
        links: [
            { name: 'Github', link: 'https://github.com/Karl-Xavier/Shonenstream-Remake.git', icon: <GithubLogo size={22} weight='fill'/> },
            { name: 'Live Link', link: 'https://myanimetv.vercel.app', icon: <Link size={22} weight='bold'/>, }
        ],
        otherImages: [shonenstream2, shonenstream3, shonenstream4, shonenstream5]
    },
]