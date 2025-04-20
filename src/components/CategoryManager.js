import { useState } from 'react';
import { dummyCategories } from '../data/dummyCategories';

const CategoryManager = () => {
  const [categories, setCategories] = useState(dummyCategories);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    color: '#3498db'
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCategory = () => {
    if (!newCategory.name) return;
    
    const category = {
      id: categories.length + 1,
      ...newCategory
    };
    
    setCategories(prev => [...prev, category]);
    setNewCategory({
      name: '',
      description: '',
      color: '#3498db'
    });
  };

  const handleEditCategory = (id) => {
    const category = categories.find(c => c.id === id);
    if (category) {
      setNewCategory({
        name: category.name,
        description: category.description,
        color: category.color
      });
      setEditingId(id);
    }
  };

  const handleUpdateCategory = () => {
    if (!newCategory.name || !editingId) return;
    
    setCategories(prev => prev.map(c => 
      c.id === editingId ? { ...c, ...newCategory } : c
    ));
    
    setNewCategory({
      name: '',
      description: '',
      color: '#3498db'
    });
    setEditingId(null);
  };

  const handleDeleteCategory = (id) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="category-manager">
      <div className="category-form">
        <h3>{editingId ? 'Edit Category' : 'Add New Category'}</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newCategory.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newCategory.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Color:</label>
          <input
            type="color"
            name="color"
            value={newCategory.color}
            onChange={handleInputChange}
          />
        </div>
        {editingId ? (
          <button onClick={handleUpdateCategory}>Update Category</button>
        ) : (
          <button onClick={handleAddCategory}>Add Category</button>
        )}
        {editingId && (
          <button 
            onClick={() => {
              setNewCategory({
                name: '',
                description: '',
                color: '#3498db'
              });
              setEditingId(null);
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="categories-list">
        <h3>Existing Categories ({categories.length})</h3>
        {categories.length === 0 ? (
          <p>No categories found</p>
        ) : (
          <ul>
            {categories.map(category => (
              <li key={category.id} style={{ borderLeft: `4px solid ${category.color}` }}>
                <div className="category-info">
                  <h4>{category.name}</h4>
                  <p>{category.description}</p>
                  <div className="category-meta">
                    <span style={{ backgroundColor: category.color }}></span>
                    <span>Color: {category.color}</span>
                  </div>
                </div>
                <div className="category-actions">
                  <button onClick={() => handleEditCategory(category.id)}>Edit</button>
                  <button 
                    onClick={() => handleDeleteCategory(category.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryManager;