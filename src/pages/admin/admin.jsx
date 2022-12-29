import Header from '@Components/header/header';
import React, { useState, useEffect } from 'react';
import style from './style.module.less';
import closeIcon from '@Assets/images/close-icon.png'
import photoIcon from '@Assets/images/photo-icon.png'

const Admin = (props) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [selectedImageText, setSelectedImageText] = useState('');
    const [error, setError] = useState('');
    const [textareaError, setTextareaError] = useState(false);
    const [charactersCount, setCharactersCount] = useState(0);
    const hiddenUploadInput = React.useRef(null)
    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const charactersLimit = 150;

    const changeCharactersCount = (e) => {
        if(textareaError && e.target.value.length > 0){
            setTextareaError(false);
        }
        setCharactersCount(e.target.value.length);
    }

    const imageChange = (e) => {
        console.log(e.target.files[0].type)
        if (e.target.files && e.target.files.length > 0) {
            if(types.find((i) => i === e.target.files[0].type) !== undefined){
                const img = new Image();
                img.src = URL.createObjectURL(e.target.files[0]);
                img.onload = function() {
                    if(this.width > 270 || this.height > 270){
                        setError('Неверный размер изображения');
                    }else{
                        setSelectedImage(e.target.files[0]);
                        setSelectedImageText(e.target.files[0].name);
                        setError('');
                    }
                }
            }else{
                setError('Неверный формат изображения');
            }
        }
    };

    const handleSubmit = (e) => {
        if(e.target[0].value.length === 0){
            e.preventDefault();
            setTextareaError(true);
        }else if(e.target[0].value.length > charactersLimit){
            e.preventDefault();
            setError('Превышен лимит символов');
        }
    }

    const removeSelectedImage = () => {
        setSelectedImage();
        setSelectedImageText('');
    };

    const uploadImg = () =>{
        hiddenUploadInput.current.click();
    }

    return (
    <div>
        <div className={style['header']}>
            <div className='container'>
                <Header openPopup = {() => setOpen(true)}/>
            </div>
        </div>
        <div className='container'>
            <h1 className={style['admin__title']}>Добавить новость</h1>
            <p className={style['admin__text']}>Введите текст новости, а также приложите изображение (размер: 270х270px)</p>
            <form className={style['form']} onSubmit={handleSubmit} method="post">
                <textarea
                    className={textareaError ? style['form__input-red'] : ''}
                    onChange={changeCharactersCount}
                    placeholder='Введите текст новости'
                    name="text">
                </textarea>
                <p className={style['form__counter'] + ' ' + (charactersCount > charactersLimit ? style['red'] : '')}>
                    Cимволов: <span>{charactersCount}</span>/{charactersLimit}
                </p>
                <input
                    style={{display: 'none'}}
                    accept=".jpg,.png,.jpeg"
                    ref={hiddenUploadInput}
                    onChange={imageChange}
                    type="file"
                    name="image">
                </input>
                <div className={style['form__info-field']}>
                    <div className={style['form__add']}>
                        <img
                            className={style['form__photo-img']}
                            src={photoIcon}
                            alt=""/>
                        <p className={style['form__add-img']} onClick={() => {uploadImg()}}>+ Добавить изображение</p> 
                    </div>
                    
                    {selectedImage && (
                        <div className={style['preview']}>
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                className={style['preview__img']}
                                alt="предпросмотр"/>
                            <p>{selectedImageText}</p>
                            <img
                                className={style['close-btn']}
                                onClick={removeSelectedImage}
                                src={closeIcon}
                                alt='закрыть'/>
                        </div>
                    )}

                    <p className={style['error']}>{error}</p>
                </div>
                <button className={style['send-btn']}>Применить</button>
            </form>
        </div>
    </div>
    )
};

export default Admin;