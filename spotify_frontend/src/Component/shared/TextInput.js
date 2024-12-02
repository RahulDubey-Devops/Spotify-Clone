const TextInput = ({ label, placeholder }) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font semi-bold">{label}</label>
            <input type="text" placeholder={placeholder} className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500" id={label}>
            </input>
        </div>)
}
export default TextInput;