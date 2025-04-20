import { useState } from 'react';
import { dummyNews, dummyCategories } from '../data/dummyNews';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminPanel from '../components/AdminPanel';
import CategoryManager from '../components/CategoryManager';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="admin-tabs">
          <button 
            className={activeTab === 'news' ? 'active' : ''}
            onClick={() => setActiveTab('news')}
          >
            News Management
          </button>
          <button 
            className={activeTab === 'categories' ? 'active' : ''}
            onClick={() => setActiveTab('categories')}
          >
            Category Management
          </button>
          <button 
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            User Management
          </button>
        </div>

        {activeTab === 'news' && <AdminPanel />}
        {activeTab === 'categories' && <CategoryManager />}
        {activeTab === 'users' && <div>User Management Coming Soon</div>}
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;