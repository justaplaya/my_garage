import { Container, Form } from './style';
import { Input } from 'Components/Input';
import { Loader } from 'Components/Loader';
import { useAuth } from './useAuth';

export const Auth = () => {
  const { text, loginRef, passwordRef, sendCredentials, loading } = useAuth();

  const { Button } = Form;

  return (
    <Container>
      <Form.Container>
        <Input ref={loginRef} placeholder={text.login} />
        <Input type={'password'} ref={passwordRef} placeholder={text.password} />
        <Button onClick={sendCredentials} disabled={loading}>
          {loading ? <Loader /> : text.logIn}
        </Button>
      </Form.Container>
    </Container>
  );
};
