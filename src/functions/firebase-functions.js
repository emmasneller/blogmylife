
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../config/firebase-config"


export const  addBlog = async(title, content) =>{
    try {
        const docRef = await addDoc(collection(db, "blogs"), {
          title: title,
          content:  content,
          date: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const addCategory = async(title, description) => {
    try{
        const docRef = await addDoc(collection(db, "categories"), {
            title: title,
            description:  description
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
    }
}

export const getAllCategories =  async() => {
    try{
       const querySnapshot =  await getDocs(collection(db, "categories"));
        const categories = []
        querySnapshot.forEach((doc) => {
            categories.push(doc)
          });

          console.log(categories)
          return categories
    } catch (e){
        console.error("Error adding document: ", e);
    }
}
