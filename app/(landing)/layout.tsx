import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/components/Footer';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	<div>
		<Navbar />
		{children}
		<Toaster />
		<GoogleAnalytics gaId="G-DJNEVNJYM7" />
		<Footer />
	</div>;
}
