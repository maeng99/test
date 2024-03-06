import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../Component/MainLogo.tsx';
import '../App.css';

/*
https://snupi.tistory.com/170
https://medium.com/watcha/%EC%9B%B9%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C-%EB%8F%99%EC%9E%91%ED%95%98%EB%8A%94-%EB%85%B9%ED%99%94%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0-70142ce28994
*/

export default function Test1() {
    // 사용자에게 카메라 화면의 데이터를 요청
    const constraints = {audio: false, video: true};

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream){
            // 비디오 트랙을 포함한 MediaStream
            console.log(mediaStream);
        })

    return (
        <div className='start'>
            <MainLogo />
            <div>
                <h3 className='list'>test3</h3>
                <p>세번째 연습 장소</p>
            </div>
        </div>
    );
}