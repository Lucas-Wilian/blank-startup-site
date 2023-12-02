'use client';
import Layout from '@/components/Layout/Layout';
import { AppProvider } from '@/context/theme';

export default function Home() {
  return (
    <AppProvider>
      <Layout>
        <p>Blank</p>
      </Layout>
    </AppProvider>
  );
}
