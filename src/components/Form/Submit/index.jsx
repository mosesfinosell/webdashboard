import {Submit} from "../style"

const Index = ({children, type, onClick}) => {
  return (
    <Submit onClick={onClick ? onClick : null} type={type}>{children}</Submit>
  )
}

export default Index