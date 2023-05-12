import React from 'react'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (<>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status} />
                </div>
            }
        </>
        )
    }
}

export default ProfileStatus;



// const ProfileStatus = (props) => {
//     return (<>
//         <div>
//             <span>{props.status}</span>
//         </div>
//         <div>
//         <input value={props.status} />
//         </div>
//     </>
//     )
// }

// export default ProfileStatus;