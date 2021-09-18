import React, { Component, useState } from 'react';
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import '../../Assets/CSS/signup.css';



const schema = yup.object().shape({
    image: yup.string().required(),
    name: yup.string().required(),
    description: yup.string(),
    timber_type: yup.string().required(),
    timber_quality: yup.string().required(),
    price: yup.string().required(),
    available_quantity: yup.string().required(),
    currency: yup.string().required(),
    thumb: yup.string().required()
    
        
})

function AddProducts() {

    const [LoginStatus, setLoginStatus] = useState();

    const [usernamemsg, setusernamemsg] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [userInfo, setuserInfo] = useState({
      file:[],
      filepreview:null,
     });
  
    const handleInputChange = (event) => {
      setuserInfo({
        ...userInfo,
        file:event.target.files[0],
        filepreview:URL.createObjectURL(event.target.files[0]),
      });
  
    }

    const [isSucces, setSuccess] = useState(null);

    const submit = async () =>{
      const formdata = new FormData(); 
      formdata.append('avatar', userInfo.file);
  
      Axios.post("http://localhost:3001/imageupload", formdata,{   
              headers: { "Content-Type": "multipart/form-data" } 
      })
      .then(res => { // then print response status
        console.warn(res);
        if(res.data.success === 1){
          setSuccess("Image upload successfully");
        }
  
      })
    }

    const imageHandler = (event) => {

      const file = event.target.files[0];
      const formData = new FormData()
      formData.append('image',file)

      fetch('http://localhost:3001/api/image', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'multipart/form-data',
        },
        credentials: 'include',
      })
      .then(res => res.json())
      .then(res => {
        // eslint-disable-next-line no-undef
        setUploadStatus(res.msg);
      })
      .catch(error => {
        console.error(error)
      })
    }


    const registerform = (data) => {

        Axios.get('http://localhost:3001/checkusername', {
            params: {
                username: data.username,
            }
        }).then((response1) => {
            if (response1.data[0]) {
                setusernamemsg("Username Already taken...");
            }
            else {
                setusernamemsg("");
                Axios.post('http://localhost:3001/addprod', {
                    image: data.image,
                    name: data.name,
                    description: data.description,
                    timber_type: data.timber_type,
                    timber_quality: data.timber_quality,
                    price: data.price,
                    available_quantity: data.available_quantity,
                    currency: data.currency,
                    thumb: data.thumb,

                }).then((response) => {
                    if (response.data.message) {
                        setLoginStatus(response.data.message)
                        document.getElementById("custmer-signup").reset();
                    }
                })
                //console.log(data)

            }
        })

        

    }



    return (
        <div className=" container">
            <div className="form-group">
                <div className="w-75 mx-auto shadow-lg p-5 ">
                    <div className="ui">
                        <form id="custmer-signup" className="form-group fs-15" onSubmit={handleSubmit(registerform)}>
                            <div className=" container">
                                <h2 className="text-center mb-4">Add A Product</h2>
                            </div>
                            <h5 className="d-flex bg-success fc-white  justify-content-center">{LoginStatus}</h5>
                            <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />

                            <label>Produt Image<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="file" className="form-control" placeholder="Image..." name="image" {...register('image')} /><br />
                                
                            <label>Name<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="Name..." name="name" {...register('name')} /><br />

                            <label>Description<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="Description..." name="description" {...register('description')} /><br />
                            

                            <label>Timber Type<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="Timber Type..." name="timber_type"  {...register('timber_type')} /><br />
                            

                            <label>Timber Quality<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" placeholder="Timber Quality..." name="timber_quality" {...register('timber_quality')} /><br />
                            

                            <label>Price<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="price" placeholder="Price..." {...register('price')} /><br />
                            

                            <label>Available Quantity<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="available_quantity" placeholder="Available Quantity..." {...register('available_quantity')} /><br />
                            
                            

                            
                            <label>Currency<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="currency" {...register('currency')} placeholder="Currency..." /><br />
                                    
                                
                            <label>Thumb<span style={{ color: "red", fontSize: "20px" }}></span> :</label> <input type="text" className="form-control" name="thumb" {...register('thumb')} placeholder="Thumb..." /><br />
                                    
                                
                            <div className="d-flex justify-content-end">
                                <button type="submit" class="btn btn-lg btn-primary">Add Product</button>
                            </div>

                            {userInfo.filepreview !== null ? 
                              <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
                            : null}
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>

    )

}

export default AddProducts