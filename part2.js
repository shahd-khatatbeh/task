let search_name=document.getElementById('search-name')
let search=document.getElementById('search-btn')
search.onclick=function(){
    searchName();
    clearTable()
}
function searchName(){
    let result=''
    let flag=0
    for(let i=0;i<students.length;i++){
        if(students[i].name.includes(search_name.value)){
            flag=1
            result+=`
            <tr>
            <td>${students[i].section}</td>
            <td>${students[i].name}</td>
            <tr>
            `
        }
    }
    if(flag==0){
        result+=`
        <tr>
            <td colspan="2">No students were found</td>
        </tr>
        `
}
    document.querySelector('tbody').innerHTML=result;
}

function clearTable(){
    if(search_name.value==''){
    document.querySelector('tbody').innerHTML=` 
    <tr>
    <td colspan="2">No students were found</td>
    </tr>
`
}
}
search_name.onkeyup=function(){
    clearTable();
}

