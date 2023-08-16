import React, { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import "./letter.css"
import LetterModal from './LetterModal';

function Letter(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return(
        <>
    <div className='app-header'>
        <h1 className="header-letter-title">인스타그랜마</h1>
        <div className='header-icons'>

        <EmailOutlinedIcon fontSize="large"/> 
        </div>
        <h1>밤편지</h1>
    </div>
    <ul className="list">
        <li className="list-letter" onClick={openModalHandler}>
              <EmailOutlinedIcon/>
              <div className="list-info">
                <p className="list-name">익명</p>
                <p className="list-comment">오늘은 날씨가 참 맑고 좋네요 이런날은 왠지..</p>
              </div>
              <div className="circle"></div>
              {isOpen ? <LetterModal openModalHandler={openModalHandler} /> : null}
            </li>
            <li className="list-letter">
              <EmailOutlinedIcon/>
              <div className="list-info">
                <p className="list-name">익명</p>
                <p className="list-comment">사진을 보냈습니다.</p>
              </div>
              <div className="circle"></div>
            </li>
            <li className="list-letter">
              <EmailOutlinedIcon/>
              <div className="list-info">
                <p className="list-name">익명</p>
                <p className="list-comment">이 편지를 받으시는 분은 오늘 하루 기분이..</p>
              </div>
              <div className="circle"></div>
            </li>
            {/* <li>
              <Avatar>이영란</Avatar>
              😚
            </li>
            <li>
              <Avatar>이필영</Avatar>
              😘
            </li> */}
    </ul>
    </>
    )
}

export default Letter;
