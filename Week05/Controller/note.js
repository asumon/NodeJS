class Notes{
    constructor(){
        this.list=[];


    }
//add
add(note) {
  //this.search(notes.tag,'tag')
    this.list.push(note);
 
    

    }


//delete
delete(index){
    if (index==null){
this.list.pop()

    }else if(typeof index=='number' ){
        if (this.list[index]){
            this.list.splice(index,1);
        }else {
            throw `Error:No element at index: ${index}`
        }
    }else {
        throw `Error:Index must be a number`
    }
}


//modify


//search
search (value,key="tag"){
let index;
this.list.some((note,i)=>{
    index=i;
    return(note[key]===value)
})
return index;
}
//getall

getAllNotes(){
return this.list;

}

}

//const myArray = new 
const myNotes = new Notes();

myNotes.add({
    title :"Hello",
    content:"Test note",
    tag:"test"


})

myNotes.add({
    title :"Hi",
    content:"Hello",
    tag:"test1"


})

console.log("MyNotes",myNotes.getAllNotes());


