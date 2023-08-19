import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
// import { IFormProps } from '../LoginForm/LoginForm';
export default function SignUpForm() {
  return (
    <form>
      <p>
        <InputField type="text" name="name" placeholder="You name" />
      </p>
      <p>
        <InputField type="email" name="email" placeholder="Email" />
      </p>
      <p>
        <InputField type="password" name="password" placeholder="Password" />
      </p>
      <p>
        <ButtonAutorization type="submit" children="Registration" onClick={() => {}} />
      </p>
    </form>
  );
}
