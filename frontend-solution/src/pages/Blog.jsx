import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '../data/blogPosts';
import { formatDate, truncateText } from '../utils/helpers';
import Card from '../components/Common/Card';
import AnimatedSection from '../components/Common/AnimatedSection';
import BackToTop from '../components/UI/BackToTop';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Memoize filtered posts to avoid recalculating on every render
  const filteredPosts = useMemo(() => {
    if (!blogPosts || !Array.isArray(blogPosts)) {
      return [];
    }

    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags && Array.isArray(post.tags) && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Safety check for categories
  const safeCategories = categories && Array.isArray(categories) ? categories : ['All'];

  return (
    <div className="blog-page">
      <div className="blog-hero section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="page-header">
              <h1 className="page-title">
                Our <span className="text-gradient">Blog</span>
              </h1>
              <p className="page-description">
                Stay updated with the latest trends, tips, and insights from the tech world
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="blog-content section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="blog-filters">
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search"
                aria-label="Search blog posts"
              />
              <div className="blog-categories">
                {safeCategories.map((category) => (
                  <button
                    key={category}
                    className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    aria-label={`Filter by ${category}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} direction="up" delay={index * 0.1}>
                <Link to={`/blog/${post.id}`} className="blog-card-link">
                  <Card className="blog-card">
                    <div className="blog-image-wrapper">
                      <img src={post.image} alt={post.title || 'Blog post image'} />
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <div className="blog-content-wrapper">
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{truncateText(post.excerpt, 120)}</p>
                      <div className="blog-meta">
                        <span className="blog-author">{post.author}</span>
                        <span className="blog-separator">•</span>
                        <span className="blog-date">{formatDate(post.date)}</span>
                        <span className="blog-separator">•</span>
                        <span className="blog-read-time">{post.readTime}</span>
                      </div>
                      {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                        <div className="blog-card-tags">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="blog-mini-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <p>No blog posts found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="reset-filters-btn"
                aria-label="Reset all filters"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default Blog;
