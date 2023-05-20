import { useContext, createContext } from 'react'; // importando contexts

const AuthContext = createContext() // adicionando biblioteca que cria contexto ao  authContext


// criação de contexto com parametros filho e value
export function AuthProvider({children, value}) { // exportando funcao que vai prover o contexto que tem parametros filho e value

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// uso do contexto 
export function useAuthValue(){ // exportando funcao que retorna o contexto sendo ja sendo ultilizando ultilizando
  return useContext(AuthContext)
}