import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post'; // Post 컴포넌트를 가져옴
import "./Comment.css"; 
import CommentForm from './CommentForm';
import { Avatar } from '@mui/material'; // Avatar 컴포넌트 추가

function Comment() {
  const { post_id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]); // 댓글 데이터 추가


  // 포스트 데이터 (협업시 고쳐야함)
  const posts = [
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
  ];

  useEffect(() => {
    // post_id에 해당하는 포스트를 posts에서 찾아서 가져오는 로직
    const selectedPost = posts.find(p => p.post_id === parseInt(post_id));
    if (selectedPost) {
      setPost(selectedPost);
    }
  }, [post_id]);

  if (!post) {
    return <div>Loading...</div>;
  };

  // 댓글 추가 함수
  const handleAddComment = (newComment) => {
 
    setComments([...comments, newComment]);
  };


  return (
    <div className='comment-container'>
      {/* 포스트 정보 표시 */}
      <Post 
        post_id={post.post_id}
        user={post.user}
        postImage={post.postImage}
        likes={post.likes}
        timestamp={post.timestamp}
      />
  
      {/* 댓글 입력 폼 */}
      <div className='commentForm-container'> 
        <CommentForm comments={comments} setComments={setComments} AddComment={handleAddComment} />
      </div>
  
      {/* 댓글 리스트 */}
      <div className='comment-list'>
      
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <Avatar>{comment.user}</Avatar>
              {comment.text}
              </li>
          ))}
            <li>
              <Avatar>이지영</Avatar>
              ❤️
            </li>
            <li>
              <Avatar>이영란</Avatar>
              😚
            </li>
            <li>
              <Avatar>이필영</Avatar>
              😘
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Comment;
