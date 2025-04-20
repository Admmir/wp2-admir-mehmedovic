import { useParams } from 'react-router-dom';
import { dummyNews } from '../data/dummyNews';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsDetailPage = () => {
  const { id } = useParams();
  const newsItem = dummyNews.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="app">
        <Header />
        <main className="main-content">
          <h1>News Not Found</h1>
          <p>The requested news article could not be found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content news-detail">
        <article className="news-article">
          <h1>{newsItem.title}</h1>
          <div className="news-meta">
            <span className="category">{newsItem.category}</span>
            <span className="date">{newsItem.date}</span>
            <span className="author">By {newsItem.author}</span>
          </div>
          <img 
            src={newsItem.imageUrl} 
            alt={newsItem.title} 
            className="news-image"
          />
          <div className="news-content">
            {newsItem.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;