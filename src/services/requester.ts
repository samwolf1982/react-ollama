import { Messages, ModelResponse } from '@/entities/messages'


export default async function requester (
    g
  modelUrl : string,
  modelName : string,
  messages : Messages,
  onData : (response : ModelResponse) => void,
  onError : (error : unknown) => void
) {
  try {
    const response = await fetch(modelUrl, {
      method: 'POST',
      body: JSON.stringify({
        model: modelName.trim(),
        messages
      })
    })
    const decoder = new TextDecoder()
    response.body?.pipeTo(new WritableStream({
      write: chunk => {
        try {
          console.log('chunk', chunk)
          console.log('chunkParsed', JSON.parse(decoder.decode(chunk)))
          onData(JSON.parse(decoder.decode(chunk)))
        }
        catch (error) {
          onError(error)
        }
      },
          close: ()=> {
            console.log('Запис завершено');
          },
    },

        ))
  }
  catch (error) {
    onError(error)
  }
}