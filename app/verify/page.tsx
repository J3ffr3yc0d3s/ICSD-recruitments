import { Suspense } from 'react';
import VerifyClient from './VerifyClient';

export default function VerifyPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <VerifyClient />
      </Suspense>
    </main>
  );
}
