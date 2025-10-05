import { NextResponse } from 'next/server'
import products from '../../../lib/data/products.json'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')?.toLowerCase() || ''

  if (!name) {
    return NextResponse.json([])
  }

  const filtered = products.filter((product) => product.name.toLowerCase().includes(name))

  return NextResponse.json(filtered)
}
