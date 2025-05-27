import { Navbar } from "../components/navbar/Navbar"


export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  )
}
