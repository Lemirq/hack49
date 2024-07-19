'use client';
import React from 'react';
import Hero from '@/components/sections/Hero';
import MeetTheTeam from '@/components/sections/MeetTheTeam';
import About from '@/components/sections/About';

export default function Home() {
	return (
		<main className="w-full overflow-x-hidden bg-dot-white/[0.2] bg-neutral-950 fc">
			<Hero />
			<About />
			<MeetTheTeam />
		</main>
	);
}
