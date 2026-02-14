import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { formatDate } from '../utils/helpers';
import AnimatedSection from '../components/Common/AnimatedSection';
import BackToTop from '../components/UI/BackToTop';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <h1>Post not found</h1>
          <Link to="/blog">Back to Blog</Link>
        </div>
      </div>
    );
  }

  // Helper function to process inline formatting like **bold**
  // MUST BE DEFINED FIRST before renderContent uses it
  const processInlineFormatting = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Enhanced function to render content with proper formatting including lists
  // Enhanced and SAFE content renderer
const renderContent = (content) => {
  if (!content) {
    return <p className="blog-post-paragraph">No content available.</p>;
  }

  const paragraphs = content.split('\n\n');

  return paragraphs.map((paragraph, index) => {
    if (!paragraph || !paragraph.trim()) {
      return null;
    }

    const trimmed = paragraph.trim();

    // 🔹 LIST SECTION (robust detection)
    if (/\n\s*-\s+/.test(paragraph)) {
      const lines = paragraph.split('\n').filter(Boolean);
      const titleLine = lines[0];
      const listItems = lines.slice(1).filter(line => line.trim().startsWith('-'));

      return (
        <div key={index} className="blog-post-list-section">
          {titleLine && titleLine.includes('**') ? (
            <h3 className="blog-post-list-title">
              {titleLine.replace(/\*\*/g, '')}
            </h3>
          ) : (
            <p className="blog-post-paragraph">
              {processInlineFormatting(titleLine)}
            </p>
          )}

          <ul className="blog-post-list">
            {listItems.map((item, idx) => (
              <li key={idx}>{item.replace(/^-\s*/, '').trim()}</li>
            ))}
          </ul>
        </div>
      );
    }

    // 🔹 STANDALONE HEADING (**Heading**)
    if (
      trimmed.startsWith('**') &&
      trimmed.endsWith('**') &&
      !trimmed.includes('\n')
    ) {
      return (
        <h2 key={index} className="blog-post-heading">
          {trimmed.replace(/\*\*/g, '')}
        </h2>
      );
    }

    // 🔹 NORMAL PARAGRAPH (SAFE FALLBACK)
    return (
      <p key={index} className="blog-post-paragraph">
        {processInlineFormatting(paragraph) || paragraph}
      </p>
    );
  });
};


  return (
    <div className="blog-post-page">
      <div className="blog-post-hero">
        <div className="blog-post-hero-overlay"></div>
        <div className="container">
          <AnimatedSection direction="up">
            <div className="blog-post-header">
              <Link to="/blog" className="back-to-blog">
                ← Back to Blog
              </Link>
              <span className="blog-post-category">{post.category}</span>
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span>By {post.author}</span>
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="blog-post-content section">
        <div className="container">
          <div className="blog-post-wrapper">
            <AnimatedSection direction="up">
              <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-post-body">
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-text">
                  {renderContent(post.content)}
                </div>
                <div className="blog-post-tags">
                  {post.tags && post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default BlogPost;
