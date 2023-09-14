const Course = ({ tanim }) => {
  const { img, title, description, price, Credit } = tanim;
  return (
    <div className="m-2 p-2 shadow-lg text-center rounded-md">
      <img className="mx-auto" src={img} alt="" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p>{description}</p>
      <div className="flex justify-center gap-3">
        <h4 className="text-lg font-medium">Price: {price}</h4>
        <h4 className="text-lg font-medium">Credit: {Credit}</h4>
      </div>
    </div>
  );
};

export default Course;