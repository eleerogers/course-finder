"use client"

import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"
import { Repo } from "@/models/repos"
import { useEffect, useState } from "react"
import SearchBar from "@/app/components/SearchBar"


const ReposPage = () => {
  const [ repos, setRepos ] = useState<Repo[]>([])
  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/eleerogers/repos')
      const repos: Repo[] = await response.json()
      setRepos(repos)
    }
    fetchRepos()
  }, [])

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <SearchBar repos={repos} setRepos={setRepos} />
      <ul className="repo-list">
        { repos.map(repo => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{ repo.name }</h3>
              <p>{ repo.description }</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage