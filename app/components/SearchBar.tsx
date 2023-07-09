import React, { useState, useEffect } from 'react'
import { Repo } from "@/models/repos"

interface SearchBarProps {
  setRepos: (a: Repo[]) => void
  repos: Repo[]
}

const SearchBar = ({ repos, setRepos }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const filteredRepos = repos.filter(repo => {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setRepos(filteredRepos)
  }

  return (
    <form onSubmit={handleSearch} className='search-form'>
      <input className='search-input' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button className='search-button' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar