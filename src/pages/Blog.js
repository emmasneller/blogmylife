import React from 'react';
import {addBlog, addCategory, getAllCategories} from '../functions/firebase-functions';

class Archive extends React.Component{
    render(){
        const categories = getAllCategories;
        const catOutput = []
        console.log(categories)
        // categories.forEach((cat) => {
        //     catOutput.push(`<div>${cat.data().title}</div>`)
        //     console.log(`${cat.id} => ${cat.data().title}`);
        //   });
        //   document.getElementById('category').innerHTML = catOutput;

        return (
            <div>
            <button onClick={() => addCategory("Faith","This blog category is all about my life and faith")}>Add Category</button>
            <button onClick={() => addBlog("My Second Blog","This has been added by a button")}>Add Blog</button>
            <button onClick={() => getAllCategories()}>Get Categories</button>
            <div id="categories">
            
            </div>
            </div>
        )
    }
}
    

export default Archive 