// bankArray where we put out Notes data in the form of Objects
let notesData = [];
let genratedId=1;








function newNote(){

    // create a div
    let note = document.createElement("div");
    // now give above div a class
    note.classList.add('note');

    // create a input tag and give that a class title
        let title = document.createElement("input");
        title.classList.add('title');
        // setting above tag an attribute
        title.setAttribute('placeholder',"Sticky title...");
        title.setAttribute('type',"text");
        title.setAttribute('data-id',genratedId);
        title.onkeyup = updateTitle;

        // below line will carte textarea
        let content = document.createElement('textarea');
        content.classList.add('content');
        content.setAttribute('placeholder',"content here...");
        content.setAttribute('data-id',genratedId)
        content.onkeyup = updateContent;


        // here we are adding these to the note it will add  input and textarea
        note.appendChild(title);
        note.appendChild(content);

            // here it will append / or add below notes
        document.getElementById('notes').appendChild(note);

        // here i am  creating object of note and will push in notesDate Array
        notesData.push({id:genratedId,title:"",content:""});
        genratedId++; 
        
}
// newNote();

function updateTitle(){
    // here this will give us object on which elemenr is is been called which is tittle
    // console.log(this.getAttribute('data-id'))
    // console.log(this.value);
    // above code what ever i type in title i will get that value in Real time adn then we store it and update it
        // Number()contructor covert it String to integer mean to say Number

        let titleId = Number(this.getAttribute('data-id')) ;
        let titleValue = this.value;

        // now on the notes array will used loop as title Id === data-id
        // here Find is a function which will loop over all objects  inside the notesData array
        let obj = notesData.find(function(note,index){
            return note.id === titleId;
        });

        obj.title = titleValue;


}


function updateContent(){

    let contentId = Number(this.getAttribute('data-id'));
    let contentValue = this.value;

    let obj = notesData.find(function(note,index){
        return note.id === contentId;
    });

    obj.content = contentValue;
    console.log(obj)
}