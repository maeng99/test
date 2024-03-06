import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../Component/MainLogo.tsx';
import '../App.css';

/*
https://stickode.tistory.com/691
*/

export default function Test2() {
    const videoRef = useRef(null);
    const [filterO, setfilter] = useState('');
    const video = document.getElementById('videoCam');
    const canvas = document.getElementById("canvas");
    const [CanvasState, setCanvasState] = useState('none'); //사
    const [CameraState, setCameraState] = useState(''); //사

    useEffect(() => {
        getWebcam((stream => {
            videoRef.current.srcObject = stream;
        }));
    }, []);

    const getWebcam = (callback) => {
        try {
            const constraints = {
                'video': true,
                'audio': false
            }
            navigator.mediaDevices.getUserMedia(constraints)
                    .then(callback);
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    function GoToCamera(target) { // 다시 촬영
        const context = canvas.getContext('2d');
        context.scale(-1, 1); // 좌우 반전
        context.translate(-512, 0); // 캔버스 원점 이동
        context.drawImage(video, 0, 0, 512, 384);
        setCanvasState('none');
        setCameraState('');
        getWebcam((stream => {
            videoRef.current.srcObject = stream;
        }));
    }

    function sreenShot(target) { // 카메라 촬영
        setCanvasState(''); // 켄버스 켜기
        setCameraState('none'); //비디오 끄기
        const video = document.getElementById("videoCam");
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext('2d');
  
        context.scale(-1, 1); // 좌우 반전
        context.translate(-512, 0); // 캔버스 원점 이동
        context.drawImage(video, 0, 0, 512, 384);
        /*
        canvas.toBlob((blob) => { //캔버스의 이미지를 파일 객체로 만드는 과정
            let file = new File([blob], "fileName.jpg", { type: "image/jpeg" })
            const uploadFile = [file] //이미지 객체
        }, 'image/jpeg');
    
        const image = canvas.toDataURL(); // 이미지 저장하는 코드
        const link = document.createElement("a");
        link.href = image;
        link.download = "Maeng";
        link.click();
        const s = videoRef.current.srcObject;
        s.getTracks().forEach((track) => {
            track.stop();
        });
        */
    }

    return (
       <div className='start'>
            <MainLogo />
            <div>
                <h3 className='list'>test2. Camera</h3>
            </div>
            <div style={{ position:"absolute", zIndex :"100", width:"700px", paddingTop: "80px", backgroundColor:"white"}} >  
                <video id="videoCam" ref={videoRef} autoPlay style={{display:CameraState, width:"512px", height:"384px", webkitTransform:"rotateY(180deg)"}}  />    
                <canvas id="canvas"  width="512px" height="384px" style={{display:CanvasState}}></canvas>
                {CanvasState === 'none' ?
                    <div onClick={sreenShot} style={{display:"flex", justifyContent:"center",alignItems: "center",width:"40px",height:"40px",margin:"10px", borderRadius:"100px",position:"absolute", zIndex :"101", bottom:'7%', left:"77%", cursor:"pointer", backgroundColor:"white"}}>
                        <div style={{textAlign:"center",width:"30px",height:"30px",border:"2px solid", borderRadius:"100px",}}>
                        </div>
                    </div>:
                    <div onClick={GoToCamera} style={{display:"flex", justifyContent:"center",alignItems: "center",width:"40px",height:"40px",margin:"10px", borderRadius:"10px",position:"absolute", zIndex :"101", bottom:'7%', left:"77%", cursor:"pointer", backgroundColor:"white"}}>
                        <p>Reset</p>
                    </div>
                }
                <div>
                    <Link to='/test3'>
                        <button style={{marginTop: '10px', marginLeft: '60%'}}>다음</button>
                    </Link>
                </div>
            </div>
        </div> 
    
    );
}