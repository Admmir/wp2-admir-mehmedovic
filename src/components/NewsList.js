import { useEffect, useState } from 'react';
import { dummyNews, dummyCategories } from '../data/dummyNews';
import NewsItem from './NewsItem';
import Calendar from './Calendar';

const NewsList = () => {
  const [filter, setFilter] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [news, setNews] = useState(dummyNews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost/news-portal-api/api/news/get_all.php');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const filteredNews = news.filter(item => {
    const matchesFilter = item.title.toLowerCase().includes(filter.toLowerCase()) || 
                         item.content.toLowerCase().includes(filter.toLowerCase());
    const matchesDate = selectedDate ? item.date === selectedDate : true;
    return matchesFilter && matchesDate;
  });

  return (
    <div className="news-container">
      <div className="news-filters">
        <input
          type="text"
          placeholder="Filter news..."
          value={filter}
          onChange={handleFilterChange}
        />
        <Calendar onDateSelect={handleDateSelect} />
      </div>
      <div className="news-grid">
        {filteredNews.map(item => (
          <NewsItem key={item.id} newsItem={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;

