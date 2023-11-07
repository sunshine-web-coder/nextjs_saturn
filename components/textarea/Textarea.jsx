export const Textarea = ({ label, name,placeholder, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`resize-none custom_textarea pl-[15px] pr-[10px] pt-[13px] pb-[12px] text-white text-base font-normal w-full h-[119px] bg-white bg-opacity-5 rounded shadow border border-white`}
      />
    </div>
  );
};
