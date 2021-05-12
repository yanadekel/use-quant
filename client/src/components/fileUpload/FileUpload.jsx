import React, { useState } from 'react';
import axios from "axios";
import './fileUpload.css'

export default function FileUpload() {

  const base = 'api/useQuant/fils';
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchPostData = async () => {


    try {
      const response = await axios.post(`${base}`, {

      });
      console.log(response.data)
      prompt("file Created")

    } catch (error) {
      console.log(error);
    }
  }


  const onChangeHandler = (event) => {

    setSelectedFile(event.target.files[0])

  }


  const onClickHandler = () => {
    const data = new FormData()
    data.append('file', selectedFile);
    axios.post(`${base}`, data, {

    }).then(res => {
      console.log()
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-md-9">
        {/* <form method="post" action="#" id="#"> */}
          <div className="form-group files">
            <label>Upload Your File</label>
            <input type="file" name="file" onChange={onChangeHandler}  class="form-control" multiple=""/>
          </div>
          <button onClick={onClickHandler}>Submit</button>
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}
