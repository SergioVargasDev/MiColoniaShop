import { Topbar } from '@/components/topbar'
import { Sidebar } from '@/components/sidebar'
import { Main } from '@/components/main'

export default async function Index() {
  return (
    <main>
      <Topbar />
      <Sidebar />
      <Main />
    </main>
  )
}
