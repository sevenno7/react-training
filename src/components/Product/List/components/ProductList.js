import React, { Component } from 'react';

class ProductList extends Component {
    
    listClick = (e) => {
        e.preventDefault();
        $('#products .item').addClass('list-group-item');
    }

    gridClick = (e) => {
        e.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    }

    render() {
        const { products } = this.props;

        return (
            <div className="container-fluid">
                <div className="well well-sm">
                    <strong>Category Title</strong>
                    <div className="btn-group">
                        <a id="list" className="btn btn-default btn-sm" onClick={this.listClick}>
                            <span className="glyphicon glyphicon-th-list">
                            </span>List</a> <a id="grid" className="btn btn-default btn-sm" onClick={this.gridClick}><span
                                className="glyphicon glyphicon-th"></span>Grid</a>
                    </div>
                </div>
                <div id="products" className="row list-group">
                    {products.map(product => (
                        <div className="item  col-xs-4 col-lg-4" key={product.id}>
                            <div className="thumbnail">
                                <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                                <div className="caption">
                                    <h4 className="group inner list-group-item-heading">{product.title}</h4>
                                    <p className="group inner list-group-item-text">{product.description}</p>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-6">
                                            <p className="lead">{product.price}</p>
                                        </div>
                                        <div className="col-xs-12 col-md-6">
                                            <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default ProductList;