import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview'
class ShopPage extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            collections : SHOP_DATA
        }
    }
    componentDidMount() {
        fetch('http://localhost/api.php?action=show')
        .then(data => data.text())
        .then(data => console.log(data))

    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
            {
                collections.map(({id, ...OtherCollectionProps}) => (
                    <CollectionPreview key={id} {...OtherCollectionProps}/>
                ))
            }
            </div>
        )
    }
}

export default ShopPage