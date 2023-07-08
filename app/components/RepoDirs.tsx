import Link from 'next/link'

interface RepoDirsProps {
  name: string
}

interface Content {
  path: string,
  type: string,
}

async function fetchRepoContents(name: string) {
  await new Promise(resolve => setTimeout(resolve, 2500))
  const response = await fetch(`https://api.github.com/repos/eleerogers/${name}/contents`, {
    next: {
      revalidate: 60
    }
  })
  const contents = await response.json()
  return contents
}

const RepoDirs = async ({ name }: RepoDirsProps) => {
  const contents: Content[] = await fetchRepoContents(name)
  const dirs = contents.filter(content => content.type === 'dir')
  
  return (<>
    <h3>Directories</h3>
    <ul>
      {dirs.map(dir => (
        <li key={dir.path}>
          <Link href={`/code/repos/${name}/${dir.path}`}>
            {dir.path}
          </Link>
        </li>
      ))}
    </ul>
  </>);
}
 
export default RepoDirs;