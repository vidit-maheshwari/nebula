import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import { Icons } from './Icons'
import { buttonVariants } from './ui/Button'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'

// Import the image
import nebulaLogo from '../../public/nebula.png'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
          <Image
            src={nebulaLogo} // Use the imported image variable here
            alt='Nebula logo'
            // className='h-8 w-8 sm:h-6 sm:w-6'
            width={40}
            height={40}
          />
          <p className='hidden text-zinc-700  font-bold text-2xl md:block'>Nebula</p>
        </Link>

        {/* search bar */}
        <SearchBar />

        {/* actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
