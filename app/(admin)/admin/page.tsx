'use client';
import { getAllFAQs } from '@/utils/supabase/actions';
import { Button, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const Admin = () => {
	const [hidden, setHidden] = useState(true);
	const [faqs, setFaqs] = useState(null);

	// run function in supabase actions to get faqs
	// set faqs to the response
	useEffect(() => {
		getAllFAQs().then((response) => {
			console.log(response);
			setFaqs(response);
		});
	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (e.target instanceof HTMLFormElement) {
			const formData = new FormData(e.target);
			console.log(formData.get('bing'));

			if (formData.get('bing') == 'joe mama') {
				setHidden(false);
			}
		}
	};

	return (
		<div className="w-screen h-screen overflow-hidden bg-neutral-950 fc">
			{hidden ? (
				<form onSubmit={handleSubmit} className="fr gap-3 w-full max-w-6xl">
					<Input type="email" label="Email" id="bing" name="bing" />

					<Button type="submit">Submit</Button>
				</form>
			) : (
				<div className="w-full h-full fc gap-3">
					<h1 className="text-4xl text-white text-center">Welcome, Admin!</h1>
					{/* make some UI to view and edit all the FAQS */}
					{faqs && (
						<div className="w-full max-w-6xl">
							{faqs.map((faq, index) => (
								<div key={index} className="fc gap-3 bg-neutral-800 rounded-lg p-5">
									<h3 className="text-2xl text-white">{faq.question}</h3>
									<p className="text-lg text-white">{faq.answer}</p>
									<button className="w-full h-16 bg-neutral-700 text-white text-2xl text-center rounded-lg">Edit</button>
								</div>
							))}
						</div>
					)}

					<button onClick={() => setHidden(true)} className="w-full h-16 bg-neutral-800 text-white text-2xl text-center rounded-lg">
						Logout
					</button>
				</div>
			)}
		</div>
	);
};

export default Admin;
