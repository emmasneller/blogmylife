import { API, graphqlOperation } from 'aws-amplify';
import {listPosts} from '../graphql/queries';
import { useEffect, useState } from 'react';
import Card from '../components/Card';


export function Posts () {
    const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetchposts()
  }, []);
  const fetchposts = async () => {
    try{
      const posts = await API.graphql(graphqlOperation(listPosts))
      const postList = posts.data.listPosts.items
      console.log(postList)
      setPosts(postList)
    }
    catch(error){
      console.log('fetch posts error:', error)
    }
  }
  return(
    posts.map( post => {
        return(
            <div key="post.id">
                <Card title={post.title} content={post.content} buttonText="Read More"/>
            </div>
        )
      })
  )
  
  
}
