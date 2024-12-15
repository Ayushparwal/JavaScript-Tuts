const user = {
    username :"hitesh",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my site`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username ="sam";
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     username = "kaggle"
//     console.log(this.username)
// }
// chai()


// const chai  = () => {
//     let username = "ayush";
//     console.log(this);
// }
// chai()


// const addtwo  = (num1 ,num2) =>{
//     return num1 + num2;
// }

const addtwo  = (num1 ,num2) =>  num1 + num2;

console.log(addtwo(5,1))
