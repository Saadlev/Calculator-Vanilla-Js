
clear.addEventListener("click", ()=> {
    input.value = "";
});

erase.addEventListener("click", ()=>{
    input.value = input.value.substr(0,input.value.length - 1);
})
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        let solution = eval(inp_val);
        if (Number.isInteger(solution)) {
            input.value = solution;
        }
        else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        alert("Invalid input");
    }
});