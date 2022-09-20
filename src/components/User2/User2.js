import React from "react";
import style from './Classes2.module.css'

class Red extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <ul>
                    <li className={style.redText}>Name: {this.props.name}</li>
                    <li className={style.redText}>Age: {this.props.age}</li>
                </ul>
            </>
        )
    }
}
export default Red;