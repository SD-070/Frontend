import Container from './layouts/Container';

import NameForm from './components/controlled-components/NameForm';
import FruitSelector from './components/controlled-components/FruitSelector';

import ClickLogger from './components/dom-events/ClickLogger';
import InputLogger from './components/dom-events/InputLogger';
import FormHandlerSubmit from './components/dom-events/FormHandlerSubmit';
import FormHandlerAction from './components/dom-events/FormHandlerAction';
import KeyLogger from './components/dom-events/KeyLogger';

const App = () => {
	return (
		<Container style={{ maxWidth: '600px', margin: '0 auto' }}>
			<h2 className='text-2xl'>Controlled components</h2>
			<div className='border-b-2'></div>
			<NameForm />
			<FruitSelector />
			<h2 className='text-2xl'>DOM Events with types</h2>
			<div className='border-b-2'></div>
			<ClickLogger />
			<InputLogger />
			<FormHandlerSubmit />
			<FormHandlerAction />
			<KeyLogger />
		</Container>
	);
};

export default App;
