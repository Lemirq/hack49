import { getAllFAQs } from '@/utils/supabase/actions';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Image from 'next/image';
const FAQ = () => {
	const [faqs, setFaqs] = useState(null);

	useEffect(() => {
		getAllFAQs().then((response) => {
			// every faq has a category, group by category. Create main array with objects inside. Each object has a category key and an array of faqs
			const groupedFaqs = response.reduce((acc, faq) => {
				const category = faq.category;
				if (!acc[category]) {
					acc[category] = [];
				}
				acc[category].push(faq);
				return acc;
			}, {});

			const faqArray = Object.keys(groupedFaqs).map((category) => {
				return {
					category,
					faqs: groupedFaqs[category],
				};
			});
			console.log(faqArray);
			setFaqs(faqArray);
		});
	}, []);

	return (
		<section id="faq" className="w-full px-5 sm:px-10 fc gap-10 max-w-6xl mx-auto my-24">
			<motion.h3
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium"
			>
				Frequently Asked Questions
			</motion.h3>
			<p className="text-lg text-neutral-300">Look at this cool FAQ section!</p>
			<div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 ">
				{faqs && (
					<>
						{faqs.map((item, index) => (
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								key={index}
								className="bg-neutral-800 rounded-lg p-5"
							>
								<h3 className="text-2xl text-white w-full text-center">{item.category}</h3>
								<Accordion>
									{item.faqs.map((faq, index) => (
										<AccordionItem key={faq.question} aria-label={faq.question} title={faq.question}>
											<p>{faq.answer}</p>
										</AccordionItem>
									))}
								</Accordion>
							</motion.div>
						))}
					</>
				)}
			</div>
		</section>
	);
};

export default FAQ;
