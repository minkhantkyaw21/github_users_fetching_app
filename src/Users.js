import React,{useState,useEffect} from 'react';
import './Users.css';

const Users = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const fetchUsers = async () =>{
            const getUsers = await fetch('https://api.github.com/users');
            const data = await getUsers.json();
            setUsers(data);
            
        }
        fetchUsers();
    },[])
  return (
    <div className='user-list'>
        <h1>GitHub User Lists</h1>
        <ul>
          {users.map(user=>(
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <p>{user.login}</p>
                <a href={user.html_url} target='blank'>
                  <button>View GitHub</button>
                </a>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Users;