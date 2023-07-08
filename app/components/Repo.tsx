import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

interface RepoProps {
  name: string
}

async function fetchRepo(name: string) {
  const response = await fetch(`https://api.github.com/repos/eleerogers/${name}`, {
    next: {
      revalidate: 60
    }
  })
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }: RepoProps) => {
  const repo = await fetchRepo(name)
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
}
 
export default Repo;