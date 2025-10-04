import { NextResponse } from 'next/server'
import products from '../../../lib/data/products.json'

export async function GET() {
  const topProductds = products.filter((p) => p.type === 'featured')
  return NextResponse.json(topProductds)
}
