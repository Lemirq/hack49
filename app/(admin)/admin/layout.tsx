import '@/app/globals.css';
import '@/app/satoshi.css';
import { Toaster } from 'sonner';

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={'bg-neutral-950 font-satoshi text-white'}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
