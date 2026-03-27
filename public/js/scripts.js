let authorLinks = document.querySelectorAll("a");
for (authorLink of authorLinks){
    authorLink.addEventListener("click", getAuthorInfo);
}

async function getAuthorInfo(){
    var myModal = new bootstrap.Modal(document.getElementById('authorModal'));
    myModal.show();
    let url = `/api/author/${this.id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let authorInfo = document.querySelector("#authorInfo");
    authorInfo.innerHTML = `<h1> ${data[0].firstName}
                                ${data[0].lastName} </h1>`;
    authorInfo.innerHTML += `<img src="${data[0].portrait}" width="200"><br>`;
    authorInfo.innerHTML += `<span class="modalCatText">Date of Birth</span> : ${data[0].dob} <br>
                            <span class="modalCatText">Date of Death</span> : ${data[0].dod} <br>
                            <span class="modalCatText">Gender</span> : ${data[0].sex} <br>
                            <span class="modalCatText">Country</span> : ${data[0].country} <br>
                            <span class="modalCatText">Profession</span> : ${data[0].profession} <br>
                            <span class="modalCatText">Biography</span> : ${data[0].biography} <br><br>`;
}
