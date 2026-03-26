import { NavLink } from 'react-router-dom';
import '../css/components/Steps.css';

const steps = [
  { number: 1, label: 'Step 1', title: 'Your Info',   path: '/' },
  { number: 2, label: 'Step 2', title: 'Select',      path: '/step2' },
  { number: 3, label: 'Step 3', title: 'Add-Ons',     path: '/step3' },
  { number: 4, label: 'Step 4', title: 'Summary',     path: '/step4' },
];

const Steps = () => {
  return (
    <div className="container__step">
      {steps.map(({ number, label, title, path }) => (
        <NavLink
          key={number}
          to={path}
          className='step'
        >
          <div className="number">{number}</div>
          <div className="description__step">
            <p>{label}</p>
            <h3>{title}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Steps;