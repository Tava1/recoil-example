import { selector } from 'recoil';

import { usernameState } from '../../atoms';

export const upperUsername = selector({
	key: 'upperUsernameState',
	get: ({ get }) => {
		const username = get(usernameState);
		const usernameUpper = username.toUpperCase();
		return usernameUpper;
	},
});

/*

Selector é uma função que recebe um objeto como parâmetro:

	-> key: uma string que é a chave única em toda a aplicação.
	-> get: recebe uma função e passa obrigatoriamente o get como parâmetros para a função pura, 
o get é o método responsável por acessar qualquer átomo, porém precisamos passar o átomo 
como referência para a função get.

*/
