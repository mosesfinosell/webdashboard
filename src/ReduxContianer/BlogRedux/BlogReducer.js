import {FETCH_BLOG_POSTS, FETCH_BLOG_POSTS_SUCCESS, FETCH_BLOG_POSTS_FAILURE} from "../constants/BlogActionType"
const initialState = {

}
const blogReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_BLOG_POSTS:
            return{
                ...state,
                isFetching: true,

            }
        case FETCH_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case FETCH_BLOG_POSTS_FAILURE:
            return {
                
            }
        default:
            return state;
    }
}

export default blogReducer