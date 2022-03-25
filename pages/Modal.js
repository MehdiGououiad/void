

export default function StorieModal(props) {
  

  return (
    <div onClick={props.hideSingleStorie} className='fixed w-full h-full top-0 left-0  flex   z-10'>
    <div  className='w-full h-full bg-gray-700 opacity-90  absolute'>

    </div>
    <div className="z-10 mt-24 w-full">
<h1 className="text-2xl text-center">Prenez rendez-vous avec le Dr Laurianne Giraudeau
</h1>
    </div>

</div>
    
  )
}
