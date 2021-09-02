
//book search field
const searchBook = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText= searchField.value;
     // console.log(searchText);
// Clear data
searchField.value='';     
//Empty string error messege
if (searchText==''){
      const emptyInput =  document.getElementById('empty-input');
      const h3 = document.createElement('h3');
      h3.innerText=`
      Nothing to search
      `;
      emptyInput.appendChild(h3);
  }
else{
// Load Data
fetch(`https://openlibrary.org/search.json?q=${searchText}`)
.then(res=>res.json())
.then(data=>searchResult(data.docs))
   //  .then(data=>console.log(data.docs))
//  call spinner function
   toggleSpinner('block');
   toggleSearchResult('none');
   toggleSearchNumber('none')
   
  }
 
}
//  Search Result
const searchResult = books =>{
    // console.log(books);
//display search number
const searchNumber = document.getElementById('search-number');
//clear data
searchNumber.textContent='';
const h5 = document.createElement('h5');
  h5.innerHTML=`
  Total Search Items: ${books.length}
  `;
  searchNumber.appendChild(h5);
// display search result
const searchResult = document.getElementById('search-result');
//clear data
searchResult.textContent='';
if (books.length == 0){
  const randomInput =  document.getElementById('random-input');
        const h3 = document.createElement('h3');
        h3.innerText=`
        No result found
        `;
        randomInput.appendChild(h3);   
}
else{
  books.forEach(book=>{
    // console.log(book);
const div = document.createElement('div');
div.classList.add('col'); 
div.innerHTML=`
<div class="card"  >
  <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
  <div class="card-body text-center bg-secondary text-white">
      <h4 class="card-title">${book.title}</h4>
      <h6 class="card-text">Author: ${book.author_name ? book.author_name:'Not Available'}</h6>
      <h6 class="card-text">Publications: ${book.publish_year?book.publish_year:'Not Available'}</h6>
      <h6 class="card-text">Publisher: ${book.publisher ? book.publisher:'Not Available'}</h6>
  </div>
</div>
`;
    searchResult.appendChild(div);
    
});
//  call spinner function
toggleSpinner('none');
toggleSearchResult('flex');
toggleSearchNumber('block')
}

    
}
//spinner
const toggleSpinner= dsiplaySpinner=>{
  document.getElementById('spinner').style.display = dsiplaySpinner;

}
const toggleSearchResult= dsiplaySpinner=>{
  document.getElementById('search-result').style.display = dsiplaySpinner;
}
const toggleSearchNumber= dsiplaySpinner=>{
  document.getElementById('search-number').style.display = dsiplaySpinner;
}