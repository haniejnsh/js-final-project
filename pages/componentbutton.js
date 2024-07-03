const variantClasses = {
    login : "bg-gray-500 text-white",
    success: "bg-green-500 hover:bg-green-800 text-white",
    danger: "bg-red-500 hover:bg-red-800 text-white",
    info: "bg-blue-500 hover:bg-blue-800 text-white"
}


export const Button = ({content , variant = "regular",idName="btn" , ...restProps}) => {

    const classes = variantClasses[variant];

    return `
        <div class="w-5/6 mb-10 mx-auto ">
            <input type="button" id=${idName} value="${content}" class=" w-full rounded-2xl  text-sm py-2 mx-auto   ${classes}"
            ...${restProps}
            >
        </div>
    `
}

// {/* <div class="w-5/6 mb-10 mx-auto ">
//                 <input type="button" id="form-btn-signup" value="Create Account" class="bg-gray-500 w-full rounded-2xl text-sm py-2 mx-auto  text-white">
//             </div> */}