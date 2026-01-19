import ContactForm from '@/components/forms/contact-form'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Bog`lanish | Dasturlash haqida blog',
}
function ContactPage() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Bog'lanish</span>
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
					<p className='text-muted-foreground'>Bog'lanish</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-4xl font-creteRound'>Udemy bilan bo'glanish</h1>
					<p className='mt-2 text-muted-foreground'>
						Men sizga yordam berish va har qanday savolga javob berish uchun
						tayyorman. Sizdan xabar kutib qolaman
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>umarjonovbekzod77@gmail.com</p>
					</div>
					<div className='flex items-center gap-3 mt-2'>
						<Phone className='w-4 h-4' />
						<p className='text-sm'>+998 97 479 94 88</p>
					</div>
				</div>

				<div>
					<h1 className='text-4xl font-creteRound mb-2'>Bog'lanish formasi</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
