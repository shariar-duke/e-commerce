import HeroSlider from './components/HeroSlider'
import TopProductsContainer from './components/TopProducts/TopProductsContainer'
export default function Home() {
  // const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  // const res = await fetch(`${baseURL}/api/products/top`, { cache: 'no-store' })

  // const topProducts = await res.json()
  // console.log('Products are', topProducts)
  return (
    <div className='w-[94vw] mx-auto'>
      <HeroSlider />

      <div className='mt-4'>
        <TopProductsContainer />
      </div>
    </div>
  )
}
