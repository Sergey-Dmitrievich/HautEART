import { useContext } from 'react';
import './paints.css'
import { paintsContext } from '../../contexts/paintsContexts';
import { paintsInterface } from '../../contexts/interfaces';
import PaintsCarts from './paintsCarts/paintsCarts';
export default function Paints() {
  const paintsMassiv:paintsInterface[] = useContext(paintsContext)
  return(
    <div className="paints__main">
      {paintsMassiv.map((item:any) => (
        <PaintsCarts key={item.id} {...item}/>
      ))}
    </div>
  );
}