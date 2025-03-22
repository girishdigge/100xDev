// import Image from 'next/image';
import { Button } from '@repo/ui/button';
// import styles from './page.module.css';

import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Link href='/admin'>
        <Button appName='webApp'>Girish-The persuasive Stallion</Button>
      </Link>
    </div>
  );
}
