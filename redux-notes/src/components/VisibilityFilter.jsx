import { filterChange } from "../reducer/filterReducer";
import { useDispatch } from 'react-redux'

const VisibilityFilter =()=>{
    const dispatch = useDispatch()
    return(
        <div>
            all
            <input 
              type="radio"
              name="filter"
              onChange={()=>dispatch(filterChange('ALL'))}
            />

            important
            <input 
              type="radio"
              name="filter"
              onChange={()=>dispatch(filterChange('IMPORTANT'))}
            />            
            non-important
            <input 
              type="radio"
              name="filter"
              onChange={()=>dispatch(filterChange('NONIMPORTANT'))}
            />
        </div>
    )
}

export default VisibilityFilter