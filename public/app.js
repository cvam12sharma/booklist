// book clas to represent book
class Book{
    constructor(title, author, isbn){
        this.title= title;
        this.author = author;
        this.isbn= isbn; 
    }
}

//ui classs : handle  ui task
class ui{
    static displayBooks(){
        const StoreBooks=[
            {
                title:'book-one',
                author: 'sam haris',
                isbn:'344344'

            },
            {
                title:'book-two',
                author: 'harrry ',
                isbn:'344364'

            },
            {
                title:'book-three',
                author: 'R rollling',
                isbn:'34445'

            },
        ];
        
        const books= StoreBooks;
        books.forEach((book) => ui.addBooktolist(book));
    }
  
     static addBooktolist(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
         <td><a href="#" class = " bg-red-700 text-sm   delete">X</a></td>
    `;
     list.appendChild(row);
     }

     // methode to delete the list 
 static delete(el){
    if(el.classList.contains=('delete')){
        el.parentElement.parentElement.remove();
    }
 }



       static clearfield(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';

       }

     }


     // event to display  book
     document.addEventListener('DOMContentLoaded',ui.displayBooks);

     // evnt to add a book
     document.addEventListener('submit',(e)=>{
        e.preventDefault();
   // get form values
   const title = document.querySelector('#title').value;
   const author = document.querySelector('#author').value;
   const isbn = document.querySelector('#isbn').value;

//    instatiate book

   const book = new  Book(title,author,isbn)

//    add to ui
ui.addBooktolist(book);
// remove from ui
ui.clearfield(book);

     });

     // event: remove a  book
 
     document.querySelector('#book-list').addEventListener('click',(e) =>
      {
        ui.delete(e.target);
     });

