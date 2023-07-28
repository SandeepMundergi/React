import React, { createRef, useState } from "react";

const ImagePreview = () => {
  const [photo, setphoto] = useState("");
  let imgRef = createRef();
  let handelSubmit = (e) => {
    e.preventDefault();
    console.log(photo);
  };
  let handelPhotoDisplay = (e) => {
    setphoto(e.target.files[0]);
    var src = URL.createObjectURL(e.target.files[0]);
    imgRef.current.src = src;
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          <input type="file" onChange={handelPhotoDisplay} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
        <div>
          <img width="150px" height="200px" alt="" ref={imgRef} />
        </div>
      </form>
    </div>
  );
};

export default ImagePreview;
