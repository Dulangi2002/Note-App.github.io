import  { Link } from 'react-router-dom';


function NavigationButtons() {
  return (
    <div className="buttons">
      <Link to="/Note-App/signup" className="btn btn-primary">Sign Up</Link>
      <Link to="/Note-App/signin" className="btn btn-primary">Sign In</Link>
    </div>
  );
}   

export { NavigationButtons };

