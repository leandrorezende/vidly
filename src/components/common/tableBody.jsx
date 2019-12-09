import React, { Component } from 'react';

class TableBody extends Component {
    render() {
        const { data } = this.props;
        return (
            < tbody >
                {
                    data.map(item => <tr>{item[]}
                    </tr>
                    )
                }
            </tbody >
        );
    }
}

export default TableBody;