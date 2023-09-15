import { useEffect, useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'


function App() {

  const [courseName, setCourseName] = useState([]);
  const [creditHour, setCreditHour] = useState(0);

  const handleCreditHour = (credit) => {
    const newCreditHour = creditHour + credit;
    setCreditHour(newCreditHour);
  }


  return (
    <>
      <h2 className='text-3xl font-bold text-center mt-10'>Course Registration</h2>

      <div className=' container mx-auto flex rounded-lg'>

        <Courses courseName={courseName} setCourseName={setCourseName} handleCreditHour={handleCreditHour}></Courses>
        <Cart creditHour={creditHour} courseName={courseName} handleCreditHour={handleCreditHour}></Cart>

      </div>

    </>
  )
}

export default App
