import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../Component/MainLogo.tsx';
import '../App.css';

export default function Home() {

    return (
        <div className='start'>
            <MainLogo />
            <div>
                <Link to='/test1' className='link'>
                    <h3>test1</h3>
                    <p className='list'>Form</p>
                </Link>
                <Link to='/test2' className='link'>
                    <h3>test2</h3>
                    <p className='list'>Camera</p>
                </Link>
                <Link to='/test3' className='link'>
                    <h3>test3</h3>
                    <p className='list'>리액트 연습하기</p>
                </Link>
            </div>
        </div>
    );
}
