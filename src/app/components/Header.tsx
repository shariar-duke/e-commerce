export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3'>
        {/* Logo */}
        <div className='text-2xl font-bold text-blue-600'>MyShop</div>

        {/* Navigation */}
        <nav className='space-x-6'>
          <a href='#' className='text-gray-700 hover:text-blue-600 transition-colors'>
            Home
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600 transition-colors'>
            Shop
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600 transition-colors'>
            About
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-600 transition-colors'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
