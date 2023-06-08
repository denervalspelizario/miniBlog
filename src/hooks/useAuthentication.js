import { db } from '../firebase/config'; // não esquece de importar o db sem ele dá problema 
import {                 // importando bibliotecas de autenticacao do firebase
  getAuth, // vai carregar os dados de autenticação para pode usa-los na aplicação
  createUserWithEmailAndPassword, // criar login com email e password
  signInWithEmailAndPassword, // logar 
  updateProfile, // atualizar perfil do user
  signOut  // deslogar
} from 'firebase/auth';

import {useState, useEffect }  from 'react';

export const useAuthentication = () => {

  const [ error, setError] = useState(null);  // state de erro
  const [loading, setLoading] = useState(null); // state de loading

  // cleanup
  // deal with memory leak

  const [ cancelled, setCancelled] = useState(false)

  const auth = getAuth()  // auth recebe as funcoes de autenticacao do firebase/auth para ser usado

  function checkIfIsCancelled(){ // este será nosso cleanup ou seja toda vez que tiver cancelado return vazio para evitar vazamento de memoria
    if(cancelled){
      return;
    }
  }

  // FUNÇÃO DE CRIACAO DE USUARIO LA NO FIREBASE
  const createUser = async (data) => {

    checkIfIsCancelled() // verificando se esta cancelado(cleanup)

    setLoading(true) // state de loading fica true até terminar a requisiçãod e autenticação
    setError("")  // state error inicia vazia

    try {  // deu certo

      const {user} = await createUserWithEmailAndPassword ( // criando usuario atravez da funcao createUser... é await pq tem que esperar a respostas do firebase
                                                            //que vai vai ter 3 dados auth(funcoes de autent), email(dado email) e senha(dado senha)
        auth,     
        data.email,
        data.password
      )

      await updateProfile(user, {     // atualizando usuario(até aqui só tem email e password) e adicionando o displayName(nome do user)
                                      // o firebase primeiro cria user com senha e email e somente depois pode-se adicionar nome ao user não dá pra adicionar os tres ao mesmo tempo
        displayName: data.displayName

      })

      setLoading(false) // concluia requisicao de autenticação altera a state de loading

      return user // retornando um user ao fim da sessão

    } catch(error) { // deu erro não criou user então...

      console.log(error.message) // retorna msg de erro
      console.log(typeof error.message) // retorna tipo de erro

      let systemErrorMessage // variavel que vai conter msg de erro 

      if(error.message.includes("Password")){ // se o erro for de password

        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."

      } else if(error.message.includes("email-already")){ // se erro for de email já em uso

        systemErrorMessage = "E-mail já cadastrado."

      } else {  // caso outro erro 
         
        systemErrorMessage = "Ocorreum erro, por favor tente mais tarde.";

      }

      setLoading(false) // concluia requisicao de autenticação altera a state de loading
      setError(systemErrorMessage)

    }

  };

  useEffect(() => {
    return () => setCancelled(true); // requisição que faz o cancelled retornar true uma vez assim que termina a requisição
  }, [])

  return { // de todas as unçoes vai retornar a autenticação(auth) - criaçao do usuario(createUser), error e loading
    auth,
    createUser,
    error,
    loading,
  }


}