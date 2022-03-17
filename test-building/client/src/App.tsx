import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect, useState } from 'react';
import { Context } from '.';
import LoginForm from './components/LoginForm';
import { IUser } from './models/IUser';
import UserService from './services/UserService';



const  App:FC = () => {
  const {store} = useContext(Context);
  const [users, serUsers] = useState<IUser[]>([])

  useEffect(() => {
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[]);

  async function  getUsers() {
    try {
      const response = await UserService.fetchUsers();
      serUsers(response.data);
    } catch (e) {
      console.log(e);
      
    }
  }

  if(store.isLoading) {
    return <div>Loading...</div>
  }

  if(!store.isAuth) {
    return (<>
      <LoginForm/>
      <button onClick={getUsers}>Получить список пользователей</button>
      </>
    )
  }

  return (
    <div>
        <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}`: "АВТОРИЗУЙТЕСЬ"}</h1>
        <button onClick={() => store.logout()}>Выйти</button>
        <h1>{store.user.isActivated ? "Аккаунт потвержден по почте" : 'Потвердите Аккаунт'}</h1>
      <div>
        <button onClick={getUsers}>Получить список пользователей</button>
      </div>
      {users.map(user => 
        <div key={user.email}>{user.email}</div>
        )}
        

    </div>
  );
};

export default observer(App) ;
