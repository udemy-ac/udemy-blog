import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export const metadata: Metadata = {
	title: 'Udemy dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	icons: { icon: '/favicon.ico' },
	authors: [{ name: 'Udemy Umarjonov' }],
	keywords:
		"dasturlash, web dasturlash, mobil dasturlash, web dizayn, ux/ui dizayn, web analitika, seo, marketing, dasturlash tillari, bloglar, qurno, Udemy, samar badriddinov, samar, badriddinov, samar badriddinov blog, Udemy blog, Udemy dasturlash blog, Udemy dasturlash blogi, Udemy dasturlashga oid blog, Udemy dasturlashga oid bloglar, Udemy dasturlash bloglar, Udemy dasturlash bloglari, Udemy dasturlashga oid bloglar, Udemy dasturlashga oid bloglar, samar badriddinov, Udemy, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, Udemy, Udemy academy, bepul dasturlash, rezyume yozish, portfolio, Udemy javascript, Udemy raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Udemy dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		locale: 'uz_UZ',
		images: 'https://media.graphassets.com/hA8T0KKCQ5Cn35ArHSpq',
		countryName: 'Uzbekistan',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster position='top-right' />
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
