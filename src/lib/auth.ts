import { get, writable } from "svelte/store";
import { nanoid } from 'nanoid';
//User Object
export type User ={
    id : string;
    email: string;
    password: string;
}
//Session object
export type Session = {
    id: string;
    userId : string;
}

const  usersStore = writable<User[]>([]);//stores the users collection
const  sessionsStore = writable<Session[]>([]);//stores the sessions collection

//email standard validation 
export function validateEmail(email: string) {
    const emailRegex = /[-A-Za-z0-9_.%]+@[-A-Za-z0-9_.%]+\.[A-Za-z]+/gm;
  
    const emailRegexExec = emailRegex.exec(email);

    if(emailRegexExec && emailRegexExec[0] === email){
        return{
            success : true,
        }
    }
    return{
        error:true,
        message : "Invalid email address",
    }
}  

//Password validation
export function validatePassword(password: string) {
    const requiredLength = password.length > 7;
  
    if (!requiredLength) {
      return {
        error: true,
        message: "Password must be at least 8 characters in length",
      };
    }
  
    return { success: true };
  }
  
  // Create a new user
  export function createUser(email: string, password: string) {
    const emailValidationResult = validateEmail(email);

    if (emailValidationResult.error) {
        throw new Error(emailValidationResult.message);
      }
    
      const passwordValidationResult = validatePassword(password);
    
      if (passwordValidationResult.error) {
        throw new Error(passwordValidationResult.message);
      }
    
      const currentUsers = get(usersStore);
    
      const newUser: User = {
        email,
        password,
        id:nanoid(),
      };


      const duplicateEmail = currentUsers.find((user)=>{
        return user.email === email;
      })
      if(!duplicateEmail){
        throw new Error("User already exists");
      }
      usersStore.update((previousUsers) =>{
        return [...previousUsers , newUser]
      })

      return createSessioById(newUser.id);

      
}




function createSessioById(userId: string) {
    const users = get(usersStore);

    const user = users.find((user) => user.id === userId);
  
    if (!user) {
      throw new Error("User not found");
    }
  
    const newSession: Session = {
      id: nanoid(),
      userId,
    };
    sessionsStore.update((previousSessions) => {
        const filteredSessions = previousSessions.filter(
          (session) => session.userId !== userId
        );
    
        return [...filteredSessions, newSession];
      });
    
      return newSession;
}

