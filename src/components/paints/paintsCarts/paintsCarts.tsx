import { paintsInterface } from '../../../contexts/interfaces'
import './paintsCarts.css'
export default function PaintsCarts(props:paintsInterface) {
  return (
    <div className="paintsCarts">
      <img className="paintsImage" src={props.photo} alt='image'/>

      <div className="paintsInfo">
        <div>
          <p>{`Название: ${props.name}`}</p>
        </div>
        <div>
        <p>{`Автор: ${props.autor}`}</p>
        </div>
        <div>
        <p>{`Цена: ${props.price} рублей`}</p>
        </div>
      </div>
    </div>
  )
}