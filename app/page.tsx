'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

export default function Home() {
	return (
		<main className="w-full overflow-x-hidden bg-dot-white/[0.2] bg-neutral-950 fc">
			<Hero />
		</main>
	);
}
