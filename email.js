const obj = {
    "to": "christina.joergensen@hotmail.com",
    "subject": "Your order is ready",
    "html": "<p>Lorem ipsum dolor..., <b>vel</b> luctu.</p>",
    "company": "Acme Inc",
    "sendername": "Acme customer support"
    }
    document.querySelector(".btn-primary").addEventListener("click", () => {
    fetch("https://frontend-8e4d.restdb.io/mail", {
    method: "POST",
    headers: {
    "x-apikey": "5e9961cb436377171a0c24cc",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
    },
    body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
    if (response.error) {
    console.error(response.error)
    } else {
    console.log(response)
    }
    })
    
    })