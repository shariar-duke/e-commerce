import HeroSlider from './components/HeroSlider'
import TopProductsContainer from './components/TopProducts/TopProductsContainer'
export default async function Home() {
  const res = await fetch('http://localhost:3001/api/products/top', {
    cache: 'no-store',
  })

  const topProducts = await res.json()
  console.log('Products are', topProducts)
  return (
    <div className='w-[94vw] mx-auto'>
      <HeroSlider />

      <div className='mt-4'>
        <TopProductsContainer />
      </div>
    </div>
  )
}
