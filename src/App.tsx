import { Button } from '@components/Atom/Button';
import { ForgotPassPage } from '@pages/ForgotPasspage/ForgotPasswordPage';
import { memo, useState } from 'react';
import './styles/tailwind.css';

const AppComponent = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div>
      {/* You can remove this button if you don't need it - it's just for demo */}
      <div>
        <Button onClick={() => setShowForgotPassword(true)}>Open Forgot Password</Button>
      </div>

      <ForgotPassPage isOpen={showForgotPassword} onClose={() => setShowForgotPassword(false)} />
    </div>
  );
};

export const App = memo(AppComponent);
