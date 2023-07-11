import { Link } from 'react-router-dom';

export const CompWithLink = () => {

  return <div>
    <h1>CompWithLink</h1>
    <Link to={'/someLink'}>Go to some link</Link>
  </div>
}