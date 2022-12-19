import { Link, Outlet } from 'react-router-dom';
import { Typography,Button } from 'antd';
import { useAuth } from "react-oidc-context";

const { Title } = Typography;

export const Layout: React.FC<any> = (_props) => {
  const auth = useAuth();
  return (
    <>
      <Title>Integration Demo</Title>
      <Button onClick={() => void auth.signinRedirect()}>Log in</Button>
      <main>
        <Outlet />
      </main>
      <footer className={'bg-slate-50 w-full p-5'}>
        <div className={'bg-white w-full p-5 mx-auto my-5 shadow-lg rounded-lg border border-1'}>
          <Link to="/privacy">Privacy</Link> | <Link to="/terms">Terms</Link>
        </div>
      </footer>
    </>
  );
};