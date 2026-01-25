import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',            // ✅ عرض Flex
        justifyContent: 'space-around', // ✅ توزيع العناصر أفقياً
        padding: '10px',
        backgroundColor: '#eee'
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
