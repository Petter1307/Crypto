import PropTypes from 'prop-types';

const Input = ({
  value,
  onChange,
  type,
  name,
  placeholder,
}) => {
  const hangeChange = (e) => {
    const {value: v} = e.target;
    onChange(v,e);
  }
  return (
    <input
    type={type}
    name={name}
    id={name}
    value ={value}
    placeholder={placeholder}
    onChange={hangeChange}
    className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
  />
  );
};
export default Input;
{/* <>
<label
  htmlFor="wallet"
  className="block text-sm font-medium text-gray-700"
>
  Ticker
</label>
<div className="mt-1 relative rounded-md shadow-md">
  <input
    type="text"
    name="wallet"
    id="wallet"
    className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
    placeholder="Example DOGE"
  />
</div>
</> */}