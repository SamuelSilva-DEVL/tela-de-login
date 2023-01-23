interface IHomeProps{
  nome?: string,
  sobrenome?: string
}

export function HomePage({nome, sobrenome}: IHomeProps){
  return <h1>Bem vindo: {nome + ' ' +sobrenome}</h1>
}