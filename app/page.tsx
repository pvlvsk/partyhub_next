import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <div>
        <AcmeLogo />
      </div>
      <div>
        <div>
          <div className={styles.shape} />
          <p className={`${lusitana.className}`}>
            <strong>Добро пожаловать в Зфер.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
          >
            <span>Log in</span> <ArrowRightIcon />
          </Link>
        </div>
        <div>
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
            <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
