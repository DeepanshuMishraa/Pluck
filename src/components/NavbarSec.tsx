import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex'>
      <Link href="/" className='font-bold text-3xl p-4'>Pluck</Link>
      <div className=''>
        <Link href="/login"className='text-gray-400 hover:bg-white duration-200 relative hover:text-black border rounded-lg h-10 p-2 top-5 md:left-[60rem] left-[9rem]'>Login</Link>
        <Link href="/login" className='relative md:left-[62rem] text-gray-400 hover:bg-white duration-200 hover:text-black border rounded-lg h-10 p-2 top-5 left-[10rem]'>SignUp</Link>
      </div>
    </div>
  )
}

export default Navbar
