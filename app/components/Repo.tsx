interface RepoProps {
  name: string
}

async function fetchRepo(name: string) {
  const response = await fetch(`https://api.github.com/repos/eleerogers/${name}`)
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }: RepoProps) => {
  const repo = await fetchRepo(name)
  return (
    <div>Repo</div>
  );
}
 
export default Repo;