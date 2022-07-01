import axios from "axios"
import toast from "react-hot-toast"

const finosellClient = axios.create({
    baseURL: process.env.REACT_APP_FINOSELL_BASE_URI
})

export const handleError = (error)=>{
    console.log("Error", error)
    if(typeof error === "string"){
        toast.error(error)
    }else{
        toast.error("An error ocurred")
    }
    // } else if ("data" in error) {
    //     toast.error()
    // }
}

export class Blog {
    async blogPage () {
        const data = await finosellClient.get("/blog")
        console.log("Blog page", data)
        //alert("data loaded 1")
        return data.data
    }
}

export class Store {

    async getStoreInfo (businessID) {
        const data = await finosellClient.get(`/seller/fetchstore?businessid=${businessID}`);
        console.log("store data", data.data)
        return data.data
    }

    async products (businessID) {
        const data = await finosellClient.get(`/products/all?businessid=${businessID}&page=1`)
        console.log("Products", data.data);
        return data.data
    }

    async product (productID) {
        const data = await finosellClient.get(`/`)
    }
}

export const getProducts = async ()=>{
    const data = await finosellClient.get("/products/all?businessid=0d6573f2-e3e1-4342-9200-b144ed476b83&page=1")
    console.log("Products", data.data);
    return data.data
}

// axios
    //   .post("https://finosell.link/api/v2/auths/firststage", values)
    //   .then((response) => {
    //     setIsLoading(false);
    //     const userDetails = response.data.message;
    //     toast({
    //       position: "top",
    //       title: `Welcome ${userDetails.name}`,
    //       description: "You have successfully registered",
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //     tools.resetForm();
    //     localStorage.setItem("password", response.data.message.password);
    //     return history("/business-signin");
    //   })
    //   .catch((error) => {
    //     console.log(error, "ERROR");
    //     setIsLoading(false);
    //     toast({
    //       position: "top",
    //       title: `Unsuccessful Attempt`,
    //       description: `${error.response.data.message}`,
    //       status: "error",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //     tools.resetForm();
    //     return error;
    //   });