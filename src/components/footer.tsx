import vercel from '../../public/vercel.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full md:h-[10rem] bg-black h-[20rem] relative top-[10rem]">
        <div className="flex relative">
            <h1 className='p-4 font-bold text-2xl mt-2'>Pluck</h1>
            <h1 className='text-gray-600 font-extralight relative top-7 '>© 2024</h1>
            <p className='text-blue-500 relative top-6 left-7 hover:opacity-6 rounded-md h-8 cursor-pointer '>● All systems normal.</p>
        </div>
        <div className='font-light md:flex md:p-4 items-center md:justify-center gap-10 text-gray-400 grid grid-cols-2 p-6 mt-4'>
                <Link href="/" className='hover:text-white duration-200'>Home</Link>
                <Link href="/about" className='hover:text-white duration-200'>About</Link>
                <Link href="/shop" className='hover:text-white duration-200'>Shop</Link>
                <Link href="/login" className='hover:text-white duration-200'>Login</Link>
                <Link href="/signup" className='hover:text-white duration-200'>SignUp</Link>
                <Link href="/contact" className='hover:text-white duration-200'>Contact</Link>
            </div>      
    </div>
  )
}

export default Footer
