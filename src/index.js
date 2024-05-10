
function getPost(){
    fetch('/api/posts')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            document.getElementById('response-from-forward-proxy').innerHTML=JSON.stringify(json);
        });
}

function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            document.getElementById('response-from-resource-server').innerHTML=JSON.stringify(json);
        });
}