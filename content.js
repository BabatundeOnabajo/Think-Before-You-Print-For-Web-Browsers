// The content.js file is used to obtain information occurring within the website, and outside of the extension itself.

// The content.js file is used to obtain information occurring within the website, and outside of the extension itself. 

//We listen for the event where a user presses Ctrl + P in the section below:

window.addEventListener('keydown', function(event){
    if(event.keyCode === 80 && (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)){
        if(confirm("Please think before you print. Are you sure you would like to continue?") == true){ //Here we use the confirm() method to ask the end user if they do indeed really need to print this online document out. If they would like to continue, then we permit them to print.
            
            window.print(); // This finally allows the user to print 
            
        }else{ //If the user doesn't confirm it then we cancel the print event.
            e.cancelBubble = true;
            e.preventDefault(); 
            e.stopImmediatePropagation();
        }
        
    }
});


