import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Link href={'/demo'}>
        <button className=' p-3 bg-red-100 rounded-md'>Click</button>
      </Link>
    </div>
  )
}
