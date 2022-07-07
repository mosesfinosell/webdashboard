import { usePaystackPayment } from "react-paystack"


const Paystack = ({children}) => {

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'sdbsuh73h4benjdns8e',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);
  return (
    <div onClick={()=>initializePayment(onSuccess, onClose)}>{children}</div>
  )
}

export default Paystack