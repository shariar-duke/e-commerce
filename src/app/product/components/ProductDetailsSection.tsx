'use client'
import { useState } from 'react'

type ProductDetailsSectionProps = {
  details: string
  description: string
}

export default function ProductDetailsSection({
  details,
  description,
}: ProductDetailsSectionProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'description'>('details')

  return (
    <div className='w-full max-w-4xl mx-auto mt-8'>
      <div className='flex border-b border-gray-300'>
        <button
          className={`py-2 px-4 font-semibold transition-all ${
            activeTab === 'details'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('details')}
        >
          Product Details
        </button>
        <button
          className={`py-2 px-4 font-semibold transition-all ${
            activeTab === 'description'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Product Description
        </button>
      </div>

      <div className='mt-4 bg-white p-4 rounded-lg shadow'>
        {activeTab === 'details' ? <p>{details || ''}</p> : <p>{description || ''}</p>}
      </div>
    </div>
  )
}
