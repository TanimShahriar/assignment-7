const Cart = ({ courseName, creditHour, creditHourRemaining, totalPrice }) => {
  console.log(creditHour);
  return (
    <div className="md:w-1/4 m-4 p-4 bg-white mt-10 mb-10  rounded-xl">
      <h3 className=" text-left text-[#2F80ED] text-lg font-medium mb-2">Credit Hour Remaining: {creditHourRemaining} hr </h3>
      <hr />
      <h3 className=" text-left text-xl font-semibold mb-2 mt-2">Course Name  </h3>

      {
        courseName.map(course => <li className="list-decimal text-left mt-3 mb-2 text-[#1C1B1B99]">{course.title}</li>)
      }
      <hr />
      <h4 className="mt-3 mb-2 text-lg font-medium text-[#1C1B1BCD]">Total Credit Hour: {creditHour} </h4>
      <hr />
      <h4 className="mt-3 text-lg font-medium text-[#1C1B1BCD]">Total Price: {totalPrice} USD </h4>

    </div>
  );
};

export default Cart;