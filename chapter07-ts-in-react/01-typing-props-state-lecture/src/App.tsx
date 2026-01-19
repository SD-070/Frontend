import Greeting from './components/Greeting';
import Button from './components/Button';
import Status from './components/Status';

import Container from './layouts/Container';

import Posts from './components/state/Posts';
import Counter from './components/state/Counter';
import UserInfo from './components/state/UserInfo';
import Profile from './components/state/Profile';

const App = () => {
	return (
		<Container style={{ maxWidth: '600px', margin: '0 auto' }}>
			<h1>TS + React + Vite</h1>
			<Greeting name='Jorge' />
			{/* <Greeting name={42} /> */}
			{/* <Button /> */}
			<Button label='Click me' />
			<Button label='Click me' colour='red' />
			<Status status='success' />
			<Status status='loading' />
			<Status status='error' />
			String here
			{/* <Status status='thinking' /> */}
			{/* state components */}
			<Counter />
			<UserInfo />
			<Profile />
			<Posts />
		</Container>
	);
};

export default App;
