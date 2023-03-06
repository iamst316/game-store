import {Row,Col} from 'react-bootstrap'
import { productsArray } from '../productsStore'
import ProductCard from '../components/ProductCard'
export default function Store(){
    return(
        <>
            <h1>Store</h1>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product,idx)=>(
                    <Col align='center' key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
                
            </Row>
        </>
    )
}