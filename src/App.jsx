import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'


function App() {


  return (
    <>
      <h2 className='text-3xl font-bold text-center mt-10'>Course Registration</h2>

      <div className=' container mx-auto flex rounded-lg'>

        <Courses></Courses>
        <Cart></Cart>

      </div>

    </>
  )
}

export default App
