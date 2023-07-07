interface PageProps {
  params: { name: string }
}

const RepoPage = ({ params: { name } }: PageProps) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Repo Details</p>
    </div>
  )
}

export default RepoPage
