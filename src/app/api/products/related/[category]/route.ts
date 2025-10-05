import { NextResponse } from 'next/server'
import products from '../../../../lib/data/products.json'

interface Params {
  params: Promise<{ category: string }>
}

export async function GET(req: Request, { params }: Params) {
  const { category } = await params
  const relatedProducts = products.filter((p) => p.category === category)
  return NextResponse.json(relatedProducts)
}
