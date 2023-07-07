import { Suspense } from "react"
import Link from 'next/link'
import Repo from "@/app/components/Repo"
import RepoDirs from '@/app/components/RepoDirs'

interface PageProps {
  params: { name: string }
}

const RepoPage = ({ params: { name } }: PageProps) => {
  return (
    <div className="card">
      <Link href="/code/repos" className='btn btn-back'>Go Back to Repositories</Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading repo...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
