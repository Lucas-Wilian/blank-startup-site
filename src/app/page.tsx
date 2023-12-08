'use client';
import Carrossel from '@/components/Carrossel/Carrossel';
import Section from '@/components/Section/Section';
import { AppProvider } from '@/context/theme';

export default function Home() {
  return (
    <AppProvider>
      <Section />
      <Carrossel />
    </AppProvider>
  );
}
