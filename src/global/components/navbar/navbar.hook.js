import {useState} from 'react'

export const useToogle = () => {
    const [isShow,setIsShow] = useState(false)

    const onClickBtn = ()=>{
        setIsShow(!isShow)
    }

  return {
      onClickBtn,
      isShow,
      setIsShow
    }
}
