function TextInput({label,type="text",placeholder="enter your input here",onChangeHandler}){
    return(
        <label>
        <span>{label}</span>
        <input
            type={type}
            className="px-4 py-2 border border-gray-500 round-md w-full"
            placeholder={placeholder}
            onChange={onChangeHandler}

        />
        </label>
    )
}

export default TextInput; 