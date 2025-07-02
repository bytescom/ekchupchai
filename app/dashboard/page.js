'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Optional: show a spinner or placeholder
  }

  return (
    <div>
      <h1>Hello, {session?.user?.name || 'User'}</h1>
    </div>
  );
};

export default Dashboard;

