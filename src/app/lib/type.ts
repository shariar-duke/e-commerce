export type Product = {
  id: number
  name: string
  oldPrice: number
  price: number
  category: string
  type: 'featured' | 'top'
  mainImg: string
  relatedImg: string[]
  productDetails: string
  productDescription: string
  sizes: { size: number; quantity: number }[]
}
