// Get input element
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  // Get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  // Get names ul
  let ul = document.getElementById('names');
  // Get lis from ul
  let li = ul.querySelectorAll('li.collection-item');

  // Loop through collection-item lis
  for(let i = 0;i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    // If matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

}


//get input from the input box
let filter_input=document.getElementById('filter-input');
//add  event listener
filter_input.addEventListener('keyup',filter_names);
function filter_names(){
    //get value of the input
    let filter_value=document.getElementById('filter-input').value.toUpperCase();
    
    //get names ul
    let ul = document.getElementById('names');
    console.log(ul)
    //get lis from ul
    let li =ul.querySelectorAll('li.collection-item');
    console.log(li)
    
    //loop through the lis

    for (let i=0;i<li.length;i++){

        let a = li[i].getElementsByTagName('a')[0];

        //if matches

        if(a.innerHTML.toUpperCase().indexOf(filter_value)>(-1)){
            li[i].style.display='';
    
        }else{
            li[i].style.display='none';
        }

    }
}
