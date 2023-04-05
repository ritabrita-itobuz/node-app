let i = 0;
const url = 'http://127.0.0.1:5501/read';
fetch(url).then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    console.log(data.length);
    for(let i = 0; i<data.length;i++)
    {
        document.getElementById("addedtasks").innerHTML+=
        `<ul>
            <li>${data[i].taskname} -- ${data[i].task}</li>
        </ul>`
    }
})

// document.getElementById("submit").addEventListener('click', () => {
//     console.log(document.getElementById("entertask").value);
//     document.getElementById("addedtasks").innerHTML+=
//     `<ul>
//         <li>${document.getElementById("entertask").value} -- ${document.getElementById("describetask").value}</li>
//     </ul>`
    
// })


function add()
{
    fetch('127.0.0.1:5501/create', {
    method: 'POST',
    body: JSON.stringify({
        taskname: document.getElementById("entertask").value,
        task: document.getElementById("describetask").value,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
  .then((response) => response.json()) 
  .then((json) => 
    document.getElementById("addedtasks").innerHTML +=
    `<ul>
        <li>${document.getElementById("entertask").value} -- ${document.getElementById("describetask").value}</li>
    </ul>`
  );
}

