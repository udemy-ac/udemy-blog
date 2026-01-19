import AuthorCard from '@/components/cards/author'
import { authors } from '@/constants'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Biz haqimizda | Dasturlash haqida blog',
}
function AboutPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-center flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound'>
					<span>Biz haqimizda</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Bosh sahifa
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Haqimizda</p>
				</div>
			</div>
			<h1 className='text-center text-4xl font-creteRound'>
				Biz <span className='text-blue-500 text-5xl ml-2'>Udemy Academy</span>
				<br /> barcha sohalar jamlangan jamiyat
			</h1>

			<div className='grid grid-cols-4 gap-4 min-h-96 mt-12'>
				<div className='col-span-2 max-md:col-span-4 relative h-80'>
					<Image
						src={'/about/01.jpg'}
						alt='about'
						fill
						priority={true}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='rounded-md object-cover'
					/>
				</div>
				<div className='h-80 self-end relative max-md:col-span-2 max-md:h-72'>
					<Image
						src={'/about/00.jpg'}
						alt='about'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
					<Image
						src={'/about/02.jpg'}
						alt='about'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='rounded-md object-cover'
					/>
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground'>
				<p>
					"Udemy Academy – bu barcha IT va kreativ sohalarni o‘zida jamlagan
					o‘quv jamiyati. Bizning asosiy yo‘nalishlarimiz Web Development va
					Dizayn, lekin shuningdek siz dasturlashning boshqa tarmoqlari, raqamli
					marketing, ma’lumotlar tahlili va zamonaviy texnologiyalar bo‘yicha
					bilim olishingiz mumkin. Har bir kursimiz amaliyotga yo‘naltirilgan,
					tajribali instruktorlar boshchiligida o‘tkaziladi va sizni real
					loyihalarda ishlashga tayyorlaydi. Bizning maqsadimiz – har bir
					o‘quvchimizni zamonaviy IT va kreativ sohada muvaffaqiyatli mutaxassis
					qilish. Bu yerda siz o‘rganasiz, rivojlanasiz va o‘z ijodingizni
					namoyon qilasiz."
				</p>
				<p>
					Nega biz? <br/>
					“Udemy Academy o‘quvchilarga real loyihalar, amaliy
					mashg‘ulotlar va tajribali instruktorlar bilan ishlash imkonini
					beradi. Bizning kurslarimiz nafaqat bilim beradi, balki sizni IT va
					dizayn sohasida haqiqiy professional qilishga yo‘naltirilgan.”.
				</p>
			</div>

			<h2 className='text-center text-4xl section-title font-creteRound my-12'>
				<span>Bizning Mualliflar</span>
			</h2>

			<div className='flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center'>
				{authors.map(c => (
					<AuthorCard key={c.name} {...c} />
				))}
			</div>
		</div>
	)
}

export default AboutPage
