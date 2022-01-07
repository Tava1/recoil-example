import { useRecoilValue, useRecoilState } from 'recoil';
import { usernameState } from './atoms';
import { upperUsername } from './atoms/selector';

const App = () => {
	const username = useRecoilValue(usernameState);
	const [userEdit, setUserEdit] = useRecoilState(usernameState);

	// Utilizando o selector
	const usernameUpper = useRecoilValue(upperUsername);

	return (
		<>
			<h1>{username}</h1>
			<br />
			Username:
			<input
				placeholder="Digite o username"
				value={userEdit}
				onChange={(e) => setUserEdit(e.target.value)}
			/>
			<br />
			<br />
			<span>{usernameUpper}</span>
		</>
	);
};

export { App };
