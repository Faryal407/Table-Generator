document.getElementById('generate').addEventListener('click', ()=>{
    const number = parseInt(document.getElementById('number').value);
    const limit = parseInt(document.getElementById('limit').value);
    const result = document.getElementById('result');
    result.innerHTML = '';
    if(isNaN(number) || isNaN(limit)){
        result.innerHTML = '<p style="color:red" >Please enter valid numbers.</p>';
        return;
};

let html  = `<table>`;
for(let i=1; i<=limit; i++){
    html += `
    <tr>
    <td>${number} x ${i} </td>
      <td> = </td>
    <td> ${number * i}</td>
    </tr>`;
}
html += `</table>`;
result.innerHTML = html;
})