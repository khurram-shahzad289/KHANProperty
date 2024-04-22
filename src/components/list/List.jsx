import './list.scss'
import Card from "../card/Card"
import {listData} from "../../lib/dummydata"

function List(){
  return (
    <div className='list'>
        {listData.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List