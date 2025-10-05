import { NextResponse } from 'next/server'
import products from '../../../lib/data/products.json'

interface Params {
  params: Promise<{ id: string }>
}

export async function GET(req: Request, { params }: Params) {
  const { id } = await params

  const product = products.find((p) => p.id.toString() === id)

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}
