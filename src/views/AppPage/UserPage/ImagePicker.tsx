import { ChangeEvent, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsPersonFillAdd, BsX } from 'react-icons/bs';

import { Icon } from '@components/index';

function ImagePicker() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const buttonStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    fontSize: '60px',
    padding: '0',
  };

  const imageStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover' as 'cover',
  };

  const deletDivStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '0px',
    right: '0px',
  };

  const deleteButtonStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    padding: 0,
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedImage = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result as string);
      }
    };

    if (uploadedImage) {
      reader.readAsDataURL(uploadedImage);
    }
  };

  const handleDeleteImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <label htmlFor='upload-button'>
        {image ? (
          <div style={{ position: 'relative' }}>
            <img src={image} alt='Profile' style={imageStyle} />
            <div style={deletDivStyle}>
              <Button
                variant='light'
                style={deleteButtonStyle}
                onClick={handleDeleteImage}
              >
                <Icon icon={BsX} size={25} />
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant='light'
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            <i className='fas fa-user'>
              <Icon icon={BsPersonFillAdd} size={100} />
            </i>
          </Button>
        )}
      </label>
      <input
        type='file'
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleImageUpload}
        ref={fileInputRef}
      />
    </div>
  );
}

export default ImagePicker;
