import { useEffect, useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'


function App() {

  const [courseName, setCourseName] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [creditHourRemaining, setCreditHourRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleCreditHour = (credit) => {
    if (creditHour + credit > 20 || creditHourRemaining - credit < 0) {
      return alert("Limit complete");
    } else {
      setCreditHour(creditHour + credit);
    }
  };

  const handleCreditHourRemaining = (hourRemaining) => {
    const newCreditHourRemaining = creditHourRemaining - hourRemaining;

    if (newCreditHourRemaining < 0 || creditHour + hourRemaining > 20) {
      return alert("Limit complete");
    } else {
      setCreditHourRemaining(newCreditHourRemaining);
    }
  };

  const handleTotalPrice = (price) => {

    const newTotalPrice = totalPrice + price;
    setTotalPrice(newTotalPrice);
  }

  return (
    <>
      <h2 className='text-3xl font-bold text-center pt-5'>Course Registration</h2>

      <div className=' container mx-auto flex rounded-lg'>

        <Courses courseName={courseName} setCourseName={setCourseName} handleCreditHour={handleCreditHour} handleCreditHourRemaining={handleCreditHourRemaining} handleTotalPrice={handleTotalPrice}></Courses>
        <Cart totalPrice={totalPrice} creditHour={creditHour} creditHourRemaining={creditHourRemaining} courseName={courseName} handleCreditHour={handleCreditHour} handleCreditHourRemaining={handleCreditHourRemaining}></Cart>

      </div>

    </>
  )
}

export default App