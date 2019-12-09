import React from 'react';

const ListGroup = (props) => {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;
    return (
        <ul className="list-group">
            {items.map(i => (
                <li onClick={() => onItemSelect(i)} key={i[valueProperty]}
                    className={i === selectedItem ? "list-group-item active" : "list-group-item"}>
                    {i[textProperty]}
                </li>
            ))
            }
        </ul >);
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;