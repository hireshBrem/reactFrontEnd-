import React from 'react'

const MediaBar = () => {
  return (
    <section className="relative z-10">
        <div className="right-0 fixed text-center p-1 mt-48 float-right flex flex-wrap flex-col bg-blue-800 z-11 text-white">
            <a target="_blank" href="https://www.facebook.com/anseljobs" className="text-[20px] m-1 fa fa-facebook"></a>
            <a target="_blank" href="https://twitter.com/anseljobs" className="text-[20px] m-1 fa fa-twitter"></a>   
        </div>
    </section>
  )
}

export default MediaBar