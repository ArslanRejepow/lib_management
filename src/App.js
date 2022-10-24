import './App.css';
import Navbar from './components/Navbar'
import React from 'react'
import Home from './components/Home'
import Books from './components/Books'
import Users from './components/Users'
import AddBook from './components/AddBook'
import AddUser from './components/AddUser'
import Data from './data.js'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
}
  const [currentPage, setCurrentPage] = React.useState('home')

  const [books, setBooks] = React.useState(Data.data.books)
  const [users, setUsers] = React.useState(Data.data.users)

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} setCurrentPage={setCurrentPage} />
      <div className="container">
        {currentPage === 'home' && <Home />}
        {currentPage === 'books' && <Books books = {books} darkMode={darkMode} setCurrentPage={setCurrentPage} />}
        {currentPage === 'users' && <Users users = {users} setCurrentPage={setCurrentPage}/>}
        {currentPage === 'addBook' && <AddBook setCurrentPage={setCurrentPage} setBooks={setBooks} />}
        {currentPage === 'addUser' && <AddUser setCurrentPage={setCurrentPage} setUsers={setUsers} />}
      </div>
    </div>
  );
}

export default App;
