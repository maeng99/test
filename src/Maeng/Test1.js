import React from 'react';
import { useForm } from 'react-hook-form';
import MainLogo from '../Component/MainLogo.tsx';
import '../App.css';


/*
https://react-hook-form.com/docs/useform/register - register기능
https://www.daleseo.com/react-forms/
https://mjn5027.tistory.com/40
https://velog.io/@ryong9rrr/React-react-hook-form-%EC%98%88%EC%A0%9C
https://velog.io/@leemember/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
https://velog.io/@h_jinny/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%8F%BC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%82%AC%EC%9A%A9 - 메인
https://velog.io/@h_jinny/React-hook-form-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%9D%BC%EC%B9%98-%EC%9C%A0%ED%9A%A8%EC%84%B1%EC%B2%B4%ED%81%AC
https://velog.io/@isabel_noh/React-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EB%B0%8F-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%A0%95%EA%B7%9C%EC%8B%9D - 비번, 이메일 정규식
*/

export default function Test1() {

    const {register, getValues, handleSubmit, formState: {errors}} = useForm();

    const onValid = (e) => {
        console.log(e, 'onValid');
        alert('정보 입력 완료\n\n이름: '+e.Name
            +'\n생년월일: '+e.Birth
            +'\n성별: '+e.Gender
            +'\n한줄 소개: '+e.Introduce);
        window.location = '/test2';
    };
    
    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    }

    return (
        <div className='start'>
            <MainLogo />
            <div>
                <h3 className='list'>test1. Form</h3>
            </div>
            <p style={{fontSize: '15px'}}> (<span style={{color: 'red'}}>*</span>) 표시의 정보는 반드시 입력해주세요.</p>
            <form onSubmit={handleSubmit(onValid, onInvalid)} className='form1'>
                <div>이름(<span style={{color: 'red'}}>*</span>)<br />
                    <input
                        type='text'
                        {...register('Name', {
                            required: '이름을 입력해주세요.'
                        })}
                        placeholder='이름'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.Name && <span>* {errors.Name.message}</span>}
                </div>
                <div>아이디(<span style={{color: 'red'}}>*</span>)<br />
                    <input
                        type='text'
                        {...register('ID', {
                            required: '아이디를 입력해주세요.',
                            pattern: {
                                value: /^[a-zA-Z0-9]{5,20}$/,
                                message: '아이디는 영문이나 숫자 5 ~ 20자로 입력해주세요.'
                            },
                            validate: {
                                noAdmin: (value) => value !== 'admin' || 'admin이라는 아이디는 사용할 수 없습니다.'
                            }
                        })}
                        placeholder='ID(영문, 숫자 포함 5 ~ 20자)'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.ID && <span>* {errors.ID.message}</span>}
                </div>
                <div>비밀번호(<span style={{color: 'red'}}>*</span>)<br />
                    <input
                        type='password'
                        {...register('Password', {
                            required: '비밀번호를 입력해주세요.',
                             pattern: {
                                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                                message: '비밀번호는 영문, 숫자, 특수문자(!@#$%^&*) 포함 8 ~ 20자로 입력해주세요.'
                            }
                        })}
                        placeholder='비밀번호(영문, 숫자, 특수문자(!@#$%^&*) 포함 8 ~ 20자)'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.Password && <span>* {errors.Password.message}</span>}
                </div>
                <div>비밀번호 확인(<span style={{color: 'red'}}>*</span>)<br />
                    <input
                        type='password'
                        {...register('PasswordCheck', {
                            required: '비밀번호를 확인해주세요.',
                            validate: {
                                matchPassword: (value) => {
                                            const {Password} = getValues();
                                            return Password === value || '비밀번호가 일치하지 않습니다.'
                                }
                            }  
                        })}
                        placeholder='비밀번호 확인'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.PasswordCheck && <span>* {errors.PasswordCheck.message}</span>}
                </div>
                <div>생년월일(<span style={{color: 'red'}}>*</span>)<br /> 
                    <input
                        type='number'
                        {...register('Birth', {
                            required: '생년월일을 입력해주세요.',
                            minLength: {
                                value: 8,
                                message: '생년월일은 8글자를 입력해주세요.(ex 20010101)'
                            },
                            maxLength: {
                                value: 8,
                                message: '생년월일은 8글자를 입력해주세요.(ex 20010101)'
                            }
                        })}
                        placeholder='생년월일(ex 20010101)'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.Birth && <span>* {errors.Birth.message}</span>}
                </div>
                <div>성별(<span style={{color: 'red'}}>*</span>)<br />
                    <label style={{marginRight: '100px'}}>
                        <input
                            type='radio'
                            {...register('Gender', {required: '성별을 입력해주세요.'})}
                            value='남자'
                        />
                        남자
                    </label>
                    <label style={{marginRight: '75px'}}>
                        <input
                            type='radio'
                            {...register('Gender', {required: '성별을 입력해주세요.'})}
                            value='여자'
                        />
                        여자
                    </label>
                    {errors.Gender && <span>* {errors.Gender.message}</span>}
                </div>
                <div>한줄소개<br />
                    <textarea rows='10' cols='50'
                        {...register('Introduce')}
                        placeholder='글을 입력하시오...'
                        style={{width: '400px', height: '100px'}}
                    />
                </div>
                <button className='button' type='submit'>제출</button>
            </form>
        </div>
    );
}