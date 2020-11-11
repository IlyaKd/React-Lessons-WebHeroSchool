import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Написать новое приложение',
      isDone: true
    },
    {
      value: 'Сделать коммит',
      isDone: false
    },
    {
      value: 'Запушить',
      isDone: false
    }
  ];

  return (
  <div className={styles.wrap}>
    <h1>Важные дела:</h1>
    <InputItem />
    <ItemList items={items}/>
    <Footer count={3} />
  </div>);
}

export default App;

