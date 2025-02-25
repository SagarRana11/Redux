import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"
const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
       event.preventDefault()
       const filterTerm = event.target.value
       dispatch(filterChange(filterTerm))

    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input  onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter