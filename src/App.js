import './App.css';
import Navbar from './components/Navbar'
import React from 'react'
import Home from './components/Home'
import Books from './components/Books'
import Users from './components/Users'
import AddBook from './components/AddBook'
import AddUser from './components/AddUser'
import AddRecord from "./components/AddRecord"
import Data from './data.js'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
}
  const [currentPage, setCurrentPage] = React.useState('home')

  const [books, setBooks] = React.useState(Data.data.books)
  const [users, setUsers] = React.useState(Data.data.users)
  const [records, setRecords] = React.useState(Data.data.records)
  console.log(records)
  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} setCurrentPage={setCurrentPage} />
      <div className="container">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} records = {records} users = {users} books = {books} darkMode={darkMode} /> }
        {currentPage === 'books' && <Books books = {books} darkMode={darkMode} setCurrentPage={setCurrentPage} />}
        {currentPage === 'users' && <Users users = {users} darkMode={darkMode} setCurrentPage={setCurrentPage}/>}
        {currentPage === 'addBook' && <AddBook setCurrentPage={setCurrentPage} darkMode={darkMode} setBooks={setBooks} />}
        {currentPage === 'addUser' && <AddUser setCurrentPage={setCurrentPage} setUsers={setUsers} />}
        {currentPage === 'addRecord' && <AddRecord setCurrentPage={setCurrentPage} records = {records} setRecords = {setRecords} users = {users} books = {books} darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default App;
