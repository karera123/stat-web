import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-[1000px] pt-3">
        <Outlet />
      </div>
    </div>
  )
}
