import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="container" style={{ padding: '80px 32px', textAlign: 'center' }}>
      <p className="eyebrow">Engineering Hub</p>
      <h1 style={{ fontSize: 48 }}>Page not found</h1>
      <p className="subhead" style={{ margin: '12px auto 28px' }}>
        The page you are looking for does not exist in the Engineering Hub.
      </p>
      <Link to="/" className="btn btn--primary">
        Back to Engineering Hub
      </Link>
    </div>
  );
}
