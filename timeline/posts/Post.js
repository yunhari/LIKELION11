import React, { useState } from 'react';
//아이콘
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; //점3개
import { Avatar } from '@mui/material'; //이름 프로필
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined'; // 반응
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'; //댓글


//댓글창 이동
import { useNavigate } from "react-router-dom";

import './Post.css'


function Post ({post_id ,user, postImage, likes, timestamp}) {
    const navigate = useNavigate();

    //반응
    const [showReactions, setShowReactions] = useState(false);
    const toggleReactions = () => {
        setShowReactions(!showReactions);
    };

    const handleCloseReactions = () => {
        setShowReactions(false);
    };


    const handleCommentsClick = () => {
      navigate(`/comments/${post_id}`); // 댓글 페이지 경로로 이동
    };

    return (
        <div className='post'>
            <div className='post_header'>
                <div className='post_headerAuthor'>
                    <Avatar>{user}</Avatar>
                    <p>{user} <span>{timestamp}</span></p>
                </div>
            </div>
            <div className='post_image'>
                <img 
                 src={postImage}
                 alt=""/>
            </div>
            <div className='post_footer'>
                <div className='post_footerIcons'>
                    <div className='post_iconsMain'>
                        <AddReactionOutlinedIcon 
                        className='postIcon' 
                        fontSize='medium'
                        onClick={toggleReactions}
                        />
                        <ChatBubbleOutlineOutlinedIcon 
                        className='postIcon' 
                        fontSize='medium' 
                        onClick={handleCommentsClick}                     
                        />                  
                    </div>
                    {showReactions && (
                        <div className='reactionsModal' onClick={handleCloseReactions}>
                            <div className='reactionOption'>😍</div>
                            <div className='reactionOption'>😢</div>
                            <div className='reactionOption'>😎</div>
                        </div>
                    )}
                </div>
                영필님을 포함한 {likes}가 😍를 눌렀어요
            </div>

    

        </div>
    );
};


export default Post
