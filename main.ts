#! /usr/bin/env node


import inquirer from "inquirer";
import Inquirer from "inquirer"
 let todo =[];
 let codition = true;
 



 while (codition)
    {
        
         let addTask = await inquirer.prompt(
            
        [       
    
            { 
               name: "todo",
               type: 'input',
               message: "what you want to do add in your Todos?"
            },


            
        
            {  name: 'addmore',
               type: 'confirm',
               message: "Do you want to add more?",
               default: "false",
            
               
            }  

            
            
        ]  


    );      
     todo.push(addTask.todo);
     codition = addTask.addmore
     console.log(todo);
     
     
}


    
      



   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   



























