'use client';
import Carrossel from '@/components/Carrossel/Carrossel';
import HeaderFixed from '@/components/HeaderFixed/HeaderFixed';
import Section from '@/components/Section/Section';
import SectionProjects from '@/components/SectionProjects/SectionProjects';
import SectionYoutube from '@/components/SectionYoutube/SectionYoutube';
import { AppProvider } from '@/context/theme';

export default function Home() {
  return (
    <AppProvider>
      <HeaderFixed />
      <Section />
      <Carrossel />
      <SectionYoutube />
      <SectionProjects />
    </AppProvider>
  );
}
