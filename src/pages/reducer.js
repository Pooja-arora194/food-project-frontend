export const listreducer = (state,action) => {
    switch(action.type){
        case "change_input":
            return{
                ...state,
                [action.payload.name]: action.payload.value
            };
            case "image-change":
                return{
                    ...state,
                    image: action.payload.value
                };

        case "add":
            return {
                ...state,
                name: "",
                price: "",
                size: "",
                image: "",
             
            };

            case "show":
                let temp2=[]
                for(let x of action.value){
                  temp2.push({name:x.name,id:x._id,price:x.price,size:x.size,image:x.image})
                }
            
                return [...temp2]
            default:
                return state;
    }
}