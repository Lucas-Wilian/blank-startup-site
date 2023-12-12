'use client';
import React from 'react';

export default function Loading() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        background: '#0a0a0a',
      }}
    >
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          color: '#fff',
        }}
      >
        Carregando...
      </p>
    </div>
  );
}
