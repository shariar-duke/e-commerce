import ProductDetailsContainer from '../components/ProductDetailsContainer'
import RelatedRroduct from '../components/RelatedRroduct'

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const productId = (await params).id

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}`, {
    cache: 'force-cache',
  })

  const product = await res.json()
  const category = product.category

  const relatedRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/related/${category}`,
    {
      cache: 'no-store',
    }
  )
  const relatedProducts = await relatedRes.json()

  console.log('related prducts are', relatedProducts)

  return (
    <div className='w-[94vw] mx-auto mt-4 bg-[#ffffff]'>
      <ProductDetailsContainer product={product} />

      <RelatedRroduct relatedProducts={relatedProducts} />
    </div>
  )
}
