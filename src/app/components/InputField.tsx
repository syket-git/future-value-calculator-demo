// InputField.js

const InputField = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: number;
  onChange: () => void;
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="px-5 py-2 font-medium border-2 text-lg w-full fco border-gray-700"
      type="number"
      placeholder={placeholder}
    />
  );
};

export default InputField;
