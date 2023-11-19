const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-between items-center py-4 px-7 text-lg leding-none font-montserrat rounded-full border-2
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="right arrow icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
