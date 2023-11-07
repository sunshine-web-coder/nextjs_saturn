export const Input = ({ label, name, placeholder, type, value, onChange, className }) => {
  return (
    <div>
      {label && (
        <div className="mb-[11px]">
          <label
            className={`text-white text-[13px] md:text-sm font-normal`}
            htmlFor={name}
          >
            {label}
          </label>
        </div>
      )}

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`pl-[15px] pr-[10px] pt-[13px] pb-[12px] text-white text-base font-normal w-full h-[47px] bg-white bg-opacity-5 rounded shadow border border-white ${className}`}
      />
    </div>
  );
};
