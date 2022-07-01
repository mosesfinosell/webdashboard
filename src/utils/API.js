import axios from "axios"

const finosellClient = axios.create({
    baseURL: process.env.REACT_APP_FINOSELL_BASE_URI
})

export class Store {

    async getStoreInfo () {
        const data = await finosellClient.get("seller/fetchstore?businessid=6b02cec5-cd35-4b93-8f47-3ba42a842b17");
        console.log("store data", data)
        return data.data
    }
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