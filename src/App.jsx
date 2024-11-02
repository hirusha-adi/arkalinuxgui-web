import { Navbar } from "./_components/Navbar"
import { PageContent } from "./_components/PageContent"
function App() {

  return (
    <>
      <Navbar />
      <PageContent>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </PageContent>
    </>
  )
}

export default App
