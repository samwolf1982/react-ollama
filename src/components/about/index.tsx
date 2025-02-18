import { ColumnContainer, Filler } from '@/components/containers'

export default function About () {

  return (
    <ColumnContainer
      style={{ alignItems: 'flex-start', padding: '8px' }}
    >
      <p><a href='https://github.com/samwolf1982/react-ollama' target='_blank'>This app</a> is a front end for the LLM (large language model) Ollama.</p>
      <p><a href='https://ollama.com' target='_blank'>Ollama</a> is an interface created by Meta that facilitates the use of artificial intelligence.</p>
      <p>The initial setup uses the <a href='https://ollama.com/library/llama3' target='_blank'>Llama 3</a> model.</p>
      <br />
      <Filler height='auto'>
        <a href='https://github.com/samwolf1982' target='_blank' title='Powered by samwolf1982'></a>
      </Filler>
    </ColumnContainer>
  )

}