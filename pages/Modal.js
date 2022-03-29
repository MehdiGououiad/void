

export default function Modal({url,hideSingleStorie}) {
  
console.log(url)
  return (
    <div onClick={hideSingleStorie} className='fixed w-full h-full top-0 left-0  flex   z-10'>
    {/* <div  className='w-full h-full bg-gray-700 opacity-90  absolute'>

    </div>
    <div className="z-10 mt-24 w-full"> */}
<iframe className="w-4/5 flex justify-center" src={url} frameBorder="0"></iframe>
    {/* </div> */}

</div>
    
  )
}
