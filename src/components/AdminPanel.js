import { useState } from 'react';
import { dummyNews } from '../data/dummyNews';

const AdminPanel = () => {
  const [news, setNews] = useState(dummyNews.filter(item => !item.isApproved));
  const [publishedNews, setPublishedNews] = useState(dummyNews.filter(item => item.isApproved));

  const approveNews = (id) => {
    setNews(prev => prev.filter(item => item.id !== id));
    const approvedItem = news.find(item => item.id === id);
    if (approvedItem) {
      setPublishedNews(prev => [...prev, { ...approvedItem, isApproved: true }]);
    }
  };

  const rejectNews = (id) => {
    setNews(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      
      <div className="pending-news">
        <h3>Pending Approval ({news.length})</h3>
        {news.length === 0 ? (
          <p>No news pending approval</p>
        ) : (
          <ul>
            {news.map(item => (
              <li key={item.id} className="news-item">
                <h4>{item.title}</h4>
                <p>{item.content.substring(0, 100)}...</p>
                <div className="actions">
                  <button onClick={() => approveNews(item.id)}>Approve</button>
                  <button onClick={() => rejectNews(item.id)}>Reject</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="published-news">
        <h3>Published News ({publishedNews.length})</h3>
        {publishedNews.length === 0 ? (
          <p>No published news</p>
        ) : (
          <ul>
            {publishedNews.map(item => (
              <li key={item.id} className="news-item">
                <h4>{item.title}</h4>
                <p>{item.content.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;