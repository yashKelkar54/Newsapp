import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsCard from './NewsCard';
import LoginPage from './LoginPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%);
  min-height: 100vh;
  padding: 20px;
`;

const NewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=42b2cfebe296417b8d87145d7e694f54'
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/news"
          element={
            <>
              <Navbar />
              <AppContainer>
                <NewsList>
                  {articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                  ))}
                </NewsList>
              </AppContainer>
              <Footer />
            </>
          }
        />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
