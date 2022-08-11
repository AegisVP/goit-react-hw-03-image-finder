import { theme } from '../Common/Theme';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template<br/>
        {theme.mp(1, 2, 3, 'auto')}
    </div>
  );
};
