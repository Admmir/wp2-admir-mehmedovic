import { Link } from 'react-router-dom';

const NewsItem = ({ newsItem }) => {
  return (
    <div className="news-card">
      <img src={newsItem.imageUrl} alt={newsItem.title} />
      <div className="news-content">
        <h3>{newsItem.title}</h3>
        <p className="news-meta">
          {newsItem.category} • {newsItem.date} • {newsItem.author}
        </p>
        <p className="news-excerpt">{newsItem.content.substring(0, 100)}...</p>
        <Link to={`/news/${newsItem.id}`} className="read-more">Read More</Link>
      </div>
    </div>
  );
};

export default NewsItem;