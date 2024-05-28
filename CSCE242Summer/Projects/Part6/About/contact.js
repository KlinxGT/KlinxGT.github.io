const showEmail = async (e) => {
    e.preventDefault();

    const res = document.getElementById("results");
    let resp = await getEmail();

    if(resp.status == 200){
        res.innerHTML = "Message Delivered :)";
    } else {
        res.textContent = "Uh oh, something went wrong.";
    }
}

const getEmail = async() => {
    const form = document.getElementById("contact");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const jason = JSON.stringify(object);
    const result = document.getElementById("results");
    result.innerHTML = "Please wait....";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:jason
        });
        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("contact").onsubmit  = showEmail;