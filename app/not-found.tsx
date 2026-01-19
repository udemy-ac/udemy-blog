import { Button } from '@/components/ui/button'
import Link from 'next/link'

function NotFound() {
	return (
		<div className='h-screen self-center flex items-center justify-center flex-col gap-3'>
			<h1 className='text-lg lg:text-3xl'>Page Not Found 😤</h1>
			<Link href={"/"}>
			<Button variant={"outline"}>Back</Button>
			</Link>
		</div>
	)
}

export default NotFound
