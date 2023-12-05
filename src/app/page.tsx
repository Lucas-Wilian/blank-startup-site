'use client';
import Section from '@/components/Section/Section';
import { AppProvider } from '@/context/theme';

export default function Home() {
  return (
    <AppProvider>
      <Section />
    </AppProvider>
  );
}
