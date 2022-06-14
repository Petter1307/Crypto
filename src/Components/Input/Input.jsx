// import PropTypes from "prop-types";

const Input = ({ value, onChange, type, name, placeholder }) => {
  const hangeChange = (e) => {
    const { value: v } = e.target;
    onChange(v, e);
  };
  return (
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={hangeChange}
      className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
    />
  );
};
// Input.PropTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string,
//   id: PropTypes.string,
//   value: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func,
// };
// IMPORTED BUT GIVES TYPO ERROR!
export default Input;
