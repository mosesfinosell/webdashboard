import React from 'react'
import Spinner from "../../components/Spinner"
import {Products, LoadMore} from "./styles"

const SearchProducts = () => {
  return (
    <>
    <Title>Search</Title>
    <Products>
      
    </Products>
    {/* {hasNextPage &&
    <LoadMore id="more">
        <Spinner size={30} border={7} />
    </LoadMore> */
    }
    </>
  )
}

export default SearchProducts