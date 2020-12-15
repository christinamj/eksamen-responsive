var apikey = "5e958ed5436377171a0c235e";
$.ajaxPrefilter(function( options ) {
	if ( !options.beforeSend) {
		options.beforeSend = function (xhr) { 
			xhr.setRequestHeader('x-apikey', apikey);
		}
	}
});


var formData = new FormData();
var files = $('#file1')[0].files; 
// Loop through each of the selected files.
for (var i = 0; i < files.length; i++) {
	var file = files[i];
	var name = files[0].name;
	// Add the file to the request.
	formData.append('myfile', file, file.name);
}

$.ajax({
	"data": formData,
	"url": "https://rdb-simpledb.restdb.io/media",
	"method": "POST",
	"contentType": false,
}).done(function (response) {
.then((res) => res.json())
.then((data) => addImage(data._id));
});

// const endpoint = "https://database-9a93.restdb.io/rest/applications";
// // const endpoint2 = "https://frontendspring20-9cc3.restdb.io/media/5ecce0c99236d304001556c5?s=w";
// const apiKey = "5e958ed5436377171a0c235e";
// let timeout;
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   function addImage(media) {
//     const postData = JSON.stringify({
//       header: form.elements.header.value,
//       image: media,
//     });
//     fetch(endpoint, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//         "x-apikey": apiKey,
//         "cache-control": "no-cache",
//       },
//       body: postData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }
//   function uploadImage() {
//     var input = document.querySelector('input[type="file"]');
//     var data = new FormData();
//     data.append("file", input.files[0]+[1]);
//     //https://frontendspring20-9cc3.restdb.io/media/
//     fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "x-apikey": apiKey,
//       },
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => addImage(data._id));
//   }
//   uploadImage();
// });

