'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from '../aurora';
import SignUpWaitlist from '../SignUpWaitlist';
import Cobe from '../cobe';
const Hero = () => {
	return (
		<section id="hero" className="w-full h-full">
			<AuroraBackground className="w-full hidden sm:fc sm:items-start relative z-10 min-h-screen pt-[25rem] md:pt-10 px-5 sm:px-10 pb-10">
				<SignUpWaitlist />

				<div className="absolute fr md:w-full top-24 md:top-[initial] md:left-[initial] md:-right-[40vw] lg:-right-[30vw] md:h-full size-72 z-10 left-5 overflow-hidden px-5">
					<Cobe />
				</div>
			</AuroraBackground>
			<AuroraBackground className="sm:hidden min-h-screen pt-48 pb-10">
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4"
				>
					<SignUpWaitlist />
				</motion.div>
			</AuroraBackground>
		</section>
	);
};

export default Hero;
