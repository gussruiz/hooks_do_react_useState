import './App.css';
import { useState } from 'react';

function App() {
	
	const [nome, setNome] = useState('Vinny');
	
	function alterarNome() {
		setNome('Vinicius Neves');
	};

	return (
		<div className="App">
		<header className="App-header">
			<h1>{nome}</h1>
			<button onClick={alterarNome}>Mudar para nome completo</button>
		</header>
		</div>
  	);
}

export default App;