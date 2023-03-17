import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import  Meta  from 'antd/lib/card/Meta'
import './PokemonList.css'

const PokemonCard = ({ name, image, allAbilities }) => {
    return (
        <Card 
        title={name}
        cover={ <img src= {image} alt={name} />}
        extra={ <StarOutlined/> }
        >
            <Meta description= {allAbilities} 
            />
        </Card>
    )
}

export default PokemonCard;

