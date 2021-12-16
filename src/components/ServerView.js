import { useState } from 'react'

const ServerView = () => {
  const [returnedData, setReturnedData] = useState('hiiiiiiii theeeeere')

  const getData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then((res) => res.json())
    console.log(newData)
    setReturnedData(newData.result)
  }

  //   getData('/api')

  return (
    <div>
      <h4>SERVER VIEW</h4>
      <button onClick={() => getData('/quit')}>Click</button>
      <p>{returnedData}</p>
    </div>
  )
}

export default ServerView
