import React, { useState } from 'react'
import Post from './posts/Post'

import "./Timeline.css"
//우리가 만든 고유한 포스트
function Timeline()  {
  const [posts,setPosts] = useState([
      {
        post_id:1,
        user:"행복한아침인사",
        postImage: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA0MThfMTI2%2FMDAxNTg3MTM5MDA3MDE0.iaUDU5agI0UZr8c0Iq-D-gHIgKREY8Ae4_rLXp40DWsg.17yRhn5QA_lIsUnrZ7-BfbuupZxzlTLYe2mDT15WZ6gg.GIF%2FexternalFile.gif&type=a340",
        likes:"12%",
        timestamp:"2시간 전",
      },
      {
        post_id:2,
        user:"영희는나의보물",
        postImage: "https://cdn.hanion.co.kr/news/photo/202112/25012_71630_3026.png",
        likes:"20%",
        timestamp:"12시간 전",
      },
      { post_id:3,
        user:"글쓰는미영",
        postImage:"https://mblogthumb-phinf.pstatic.net/MjAxNzA2MTZfNTIg/MDAxNDk3NjE1NTczOTU2.3JwA51G7UOCGdddtt_-BYtvj7ed81Kuh87XbJRO8IIog.EPVqqJRGIjwu63DRxqtdefV3KCZt-rEFJK3vwKQ1xrwg.JPEG.whdlswn77/2_%2811%29.jpg?type=w800",
        likes:"35%",
        timestamp:"하루 전",
      },
      { post_id:4,
        user:"가짜뉴스방지-김갑수",
        postImage:"https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/118517981_1289252184578297_6182872169769093183_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=vMb_J8rACR8AX9OP52T&_nc_ht=scontent-gmp1-1.xx&oh=00_AfDT_nhrXUHzG7moEYwi0VNSAFL6YapzndefQwHaokG-pg&oe=64FF2EE2",
        likes:"35%",
        timestamp:"하루 전",
      },
  ]);

    // 백엔드로부터 받은 새로운 포스트 정보를 추가하는 함수
    //const addNewPost = (newPost) => {
    //setPosts((prevPosts) => [...prevPosts, newPost]);
    //};

  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_post">
          {posts.map(post =>(
            <Post
            key={post.post_id} // 프론트엔드와 백엔드 간의 고유한 식별자(ID)
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes}
            timestamp={post.timestamp}
            post_id={post.post_id}  //post id 추가전달
            posts={posts} /> 
           
          ))}
        </div>
      </div>
      <div className='timeline_right'>
        
      </div>
    </div>
  )
}

export default Timeline
