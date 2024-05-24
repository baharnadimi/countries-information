import { regions } from "@/contants/regionList";

function Form({ search, region, searchOnChange, selectOnChange }: FormProps) {
  return (
    <form className="flex flex-col gap-8 pb-10 md:flex-row">
      <input
        id="search"
        name="search"
        type="text"
        placeholder="search for a country..."
        value={search}
        onChange={searchOnChange}
        className="w-full p-3 placeholder-gray-600 rounded-xl md:w-96 focus:outline-none shadow-lg relative"
      />
      <select
        id="select"
        name="search"
        value={region}
        onChange={selectOnChange}
        className="p-3 w-50 md:ml-auto rounded-xl shadow-lg relative"
      >
        {regions.map(({ value, label }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Form;
