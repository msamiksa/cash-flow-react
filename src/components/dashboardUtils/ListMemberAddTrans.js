import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

const ListMembers = (props) =>{
    return(
        <div className="list-members-at">
            {Object.keys(props.selectedMembers).map(item=>{
                const setMemeber = () =>{
                    let temp = {...props.selectedMembers}
                    temp[item] = !props.selectedMembers[item]
                    props.setSelectedMembers(temp)
                }
                return(
                    <>
                        <label>{item}</label>
                        <Checkbox
                            checked={props.selectedMembers[item]}
                            onClick = {()=>setMemeber(item)}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default ListMembers