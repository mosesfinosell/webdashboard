import React from 'react'
import {useParams} from "react-router-dom"
import {useQuery } from "react-query"
import Spinner from "../../components/Spinner"
import {Products, LoadMore, Error, SpinnerContainer} from "./styles"
import {useSelector} from "react-redux"
import {Store} from "../../utils/API"
import Item from "../../components/Store/Item"

const SearchProducts = () => {
  
  const store = useSelector((state)=>state.shoppingCart)
  const {businessID} = useParams()
  const api = new Store(businessID)
  const search = store.search
  const {data, error, isData, isError, isLoading} = useQuery(["search", search], ()=>api.search(search))


  if(error){
    return(
      <Error>
        <p>An error ocurred while fetching your search results.</p>
      </Error>
    )
  }

  return (
    <>
    {isLoading ? 
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    :
    <>
      {data && data.data.length > 0 ?
        <Products>
          {data.data.map((item, i)=><Item key={i} item={item} />)}
        </Products>
        :
        <Error>
          <p>No product matches your search</p>
        </Error>
      }
    </>
    }
    </>
  )
}

export default SearchProducts