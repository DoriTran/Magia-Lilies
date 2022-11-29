import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Game features
import GamePage from "./features/GamePage/GamePage"

// Global context
import useGlobalData from "./globals/useGlobalData"
import { createContext } from "react"
export const GlobalDataContext = createContext()

function App() {
  const globalData = useGlobalData()

  return (      
    <GlobalDataContext.Provider value={globalData}>  
      <BrowserRouter>
        <Routes>
          <Route path="game" element={<GamePage />} />
          <Route path="*" element={<Navigate replace to='/game' />} />
        </Routes>
      </BrowserRouter>
    </GlobalDataContext.Provider>
  );
}

export default App;

