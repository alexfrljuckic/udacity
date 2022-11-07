import { connect } from "react-redux";
import "../styling/LeaderBoard.css";
const LeaderBoard = ({users, sortedUserIds}) => {
    const userIdList = Object.keys(users);

    return (
        <div>
            <table className="table table-secondary table-hover table-striped" > 
                <thead>
                    <tr>
                        <th scope="col">Users</th>
                        <th scope="col">Answered</th>
                        <th scope="col">Created</th>
                    </tr>
                </thead>
                <tbody>
                {
                    sortedUserIds.map((userId) => (
                        <tr key={userId} className="table-light">
                            <td className="user-data">
                                <img src={users[userId].avatarURL}/>
                                <div>
                                    <p>{users[userId].name}</p>
                                    <p>{userId}</p>
                                </div>
                                
                            </td>
                            <td>{Object.keys(users[userId].answers).length}</td>
                            <td>{users[userId].questions.length}</td>
                        </tr>
                    ))
                }
                </tbody>
                
                
            </table>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const sortedUserIds = Object.keys(users).sort((a,b) => {
        const answersLengthA = Object.keys(users[a].answers).length;
        const answersLengthB = Object.keys(users[b].answers).length;
        const createdLengthA = users[a].questions.length;
        const createdLengthB = users[b].questions.length;
        if(answersLengthA === answersLengthB) {
            return createdLengthA > createdLengthB ? -1 : 1;
        }
        else {
            return answersLengthA > answersLengthB ? -1 : 1
        }
    
    })
    return {
        users,
        sortedUserIds
    }
}

export default connect(mapStateToProps)(LeaderBoard);