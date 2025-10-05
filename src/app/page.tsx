import FeaturedProductContainer from './components/FeaturedProducdts/FeaturedProductContainer'
import HeroSlider from './components/HeroSlider'
import TopProductsContainer from './components/TopProducts/TopProductsContainer'
export default async function Home() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  const res = await fetch(`${baseURL}/api/products/top`, { cache: 'no-store' })

  const topProducts = await res.json()

  const featuredRes = await fetch(`${baseURL}/api/products/featured`, { cache: 'no-store' })
  const featuredProducts = await featuredRes.json()
  // console.log('Product', topProducts)
  return (
    <div className='w-[94vw] mx-auto'>
      <HeroSlider />

      <div className='mt-4 spacy-y-6'>
        <TopProductsContainer products={topProducts} />
        <FeaturedProductContainer products={featuredProducts} />
      </div>
    </div>
  )
}
