document.querySelector("button").addEventListener("click", () => {
    let fileValue = document.querySelector("#fileName").value;
    let inputData = document.querySelector('.inputBox').value;
    
    if (!fileValue || inputData === ""){
        alert("Please Fill up the Form");
    } else  {
        let blob = new Blob([inputData], {type: "text/plain"});
        let url = URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = `${fileValue}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
});