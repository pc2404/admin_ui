// api url
const apiUrl ="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

// define async function
async function fetchUpi(url){

    //store response
    const response= await fetch(url);

    //storing data in the form of JSON format
    const array= await response.json();
    console.log(array); 

    
    
// }
// fetchUpi(apiUrl);
    // fetch(url)
    // .then(response => {
    // return response.json();
    // })
    // .then(jsondata => console.log(jsondata));

    show(array);

    

} 

fetchUpi(apiUrl);
// console.log(array);
// array.then(jsondata => console.log(jsondata));
// // show(array);



//function to define inneHtml for HTML
function show(data){
    const finalData= pagination(data);
    console.log(finalData);

    let tab =
            `<tr class='tableRow'> 
                <th class='tableData'><label for='SelectAll>'<input type='checkbox' id='SelectAll' name='mycheckox'>Select All</label></th>
                <th class='tableData'>Name</th> 
                <th class='tableData'>Email</th> 
                <th class='tableData'>Role</th>
                <th class='tableData'>Action</th>
            </tr>`;
        
    //loop to access all rows
    for (let row of finalData.trimArray){
        tab += `
            <tr class='tableRow'>
                <td class='tableData'><input type='checkbox' class='select' name='mycheckox'></td>
                <td class='tableData'>${row.name}</td>    
                <td class='tableData'>${row.email}</td>    
                <td class='tableData'>${row.role}</td> 
                <td class='tableData'><i class="fa-solid fa-trash-can"></i> <i class="fa-solid fa-pen-to-square"></i></td>
            </tr>
        `;
    }  
    
    
    //setting innerHTML to HTML
    document.getElementById('employeeTable').innerHTML= tab;
    pageButtons(finalData.pages);
    

}


// Pagination-

var state = {
     'rows' : 10,
     'currentPage' : 1,
     'window' : 5,
}
function pagination(data){
    // var array = data;
    const numberOfItems= data.length;
    const rows = 10;
    const currentPage = 1;
    const numberOfPages= Math.ceil(numberOfItems/rows);

    // Built a single page of items
    
    var trimStart= (currentPage-1)*rows;
    var trimEnd= trimStart+rows;
    var trimData= data.slice(trimStart, trimEnd);
    // console.log(trimData);
    return{
        'trimArray' : trimData,
        'pages' : numberOfPages,
    }
}    


 // builting the pagination button
function pageButtons(numOfPages){
    var wrapper = document.getElementById('paginationWrapper');
    wrapper.innerHTML= '';

    for (let currpage=1; currpage <= numOfPages; currpage++){
        wrapper.innerHTML += `<button value=${currpage} class="btn-sm"> ${currpage}</button>`;
    }
    
}   











 



