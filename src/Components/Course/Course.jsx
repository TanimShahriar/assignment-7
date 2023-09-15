const Course = ({ tanim, handleSelectCourse, handleCreditHour, handleCreditHourRemaining, handleTotalPrice }) => {
  const { img, title, description, price, Credit } = tanim;

  const multiFunction = () => {
    handleSelectCourse(tanim);
    handleCreditHour(Credit);
    handleCreditHourRemaining(Credit);
    handleTotalPrice(price);
  }

  console.log(handleCreditHourRemaining);

  return (
    <div className="m-2 p-2 bg-white text-center rounded-md space-y-3">
      <img className="mx-auto mt-4" src={img} alt="" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm px-4">{description}</p>
      <div className="flex justify-center gap-3">
        <div className="flex items-center gap-4">
          <img className="h-5 w-5" src="src/assets/dollar.svg" alt="" />
          <h4 className="text-md font-medium text-[#1C1B1B99]"> Price: {price}</h4>
        </div>
        <div className="flex items-center gap-4">
          <img className="h-5 w-5" src="src/assets/frame.svg" alt="" />
          <h4 className="text-md font-medium text-[#1C1B1B99]">Credit: {Credit}hr</h4>
        </div>

      </div>
      <button onClick={multiFunction} className="text-md w-9/12 px-3 py-1 rounded-md bg-blue-500 text-white">Select</button>
    </div>
  );
};

export default Course;





