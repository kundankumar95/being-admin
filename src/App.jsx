// import Navbar from './Components/Navbar/Navbar'
// import Admin from './Pages/Admin/Admin'
import { Routes,Route } from 'react-router-dom'
import AddProduct from './Components/AddProduct/AddProduct'
import ListProduct from './Components/ListProduct/ListProduct'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<AddProduct />} />
          <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default App


