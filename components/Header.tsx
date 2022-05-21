import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/" className="cursor-pointer object-contain w-44">
          <p>home icon</p>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-4">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="bg-green-600 px-4 rounded-full py-1 text-white">Follow</h3>
        </div>
      </div>
      <div className="flex text-green-600 items-center space-x-5">
        <h3>Sign in</h3>
        <h3 className="border border-green-600 px-4 py-1 rounded-full ">Get Started</h3>
      </div>
    </header>
  )
}

export default Header