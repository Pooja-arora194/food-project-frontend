import React from 'react'
import { listreducer } from './reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
const initialState = {
    name: "",
    price: "",
    size: "",
 
    };


const Addproduct = () => {

    const [state, dispatch] = React.useReducer(listreducer, initialState);

    const subm = async (e)=>{
        e.preventDefault();
    }

    const handleSubmit = async(e) => {
          dispatch({
            type: "change_input",
            payload: {name: e.target.name, value: e.target.value}
          })
        }

        const handleImage = async(e) => {
          dispatch({
            type: "image-change",
            payload: {value: e.target.files[0]}
          })
        }

        const add = async() => {
            const { name, price, size } = state;

           
            if(!name || !price || !size){
                toast.error("All fields are required")   
                return
              }
           
              const formData = new FormData();
          
              formData.append('name', state.name);
              formData.append('price', state.price);
              formData.append('size', state.size);
              formData.append('image', state.image);
      
              axios.post('/additem', formData)
                   .then(res => {
                      dispatch({ type: "add"});
                      toast.success("item add successfully")     
                   })
                   .catch(err => {
                      console.log(err);
                   });
             
        }

      

        

  return (
    <div>

            <div className="container-fluid pt-4 ">
                    <ToastContainer></ToastContainer>
                    <div className="col-sm-6 mx-auto">
                
                        <div className="card ">
                            <div className="card-header">
                                <h3 className="text-center pt-5">Add Products </h3>
                            </div>
                            <div className="card-body">
                                <form className="form" onSubmit={subm} encType='multipart/form-data'>
                                    <label className="mt-3">Name: </label>
                                    <input type="text" name="name"placeholder="Enter Name.."  value={state.name} onChange={handleSubmit} className="form-control" />
                                    <label className="mt-3">Price: </label>
                                    <input type="number"name="price" placeholder="Enter Price.." value={state.price} onChange={handleSubmit}   className="form-control" />
                                    <label className="mt-3">Size: </label>
                                    <input type="text"name="size" placeholder="Enter Size.." value={state.size}  onChange={handleSubmit}   className="form-control" />
                                    <label className="mt-3">Image: </label>
                                    <input type="file"name="image" className="form-control"  onChange={handleImage} />
                                    <input type="submit" name="submit" className="btn btn-danger mt-3" onClick={add}/>
                                </form>
                                
                            </div>
                                
                        </div>
                    
                    </div>
                </div>
            </div>
  )
}

export default Addproduct;