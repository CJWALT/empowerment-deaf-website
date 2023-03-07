import {useEffect, useState} from 'react'; 

const useFetch = (url) =>{ 
    const [appState, setAppState] = useState({
        data: [], 
        pending: true, 
        error :null
    })

    useEffect(()=>{ 
        
        const abortCont = new AbortController(); 


        fetch( url, {signal:abortCont.signal})
            .then(res =>{ 
                if(!res.ok){ 
                    throw Error('Could not fetch data')
                }
                return res.json()
            })
            .then((data)=>{ 
                setAppState(
                    {
                        data:data,
                        pending:false,
                        error:null,
                    }
                )
            })
            .catch((err)=>{ 

                if(err.name === 'AbortError'){ 
                    console.log('Fetch aborted')
                    console.log(err.name)
                }
                else{ 
                    setAppState((prevAppState)=>({ 
                            ...prevAppState, 
                            pending:false, 
                            error: err.message
                    }))
                }
            })

            return ()=> abortCont.abort();
      }, [url]); 
      return { data:appState.data, pending:appState.pending, error:appState.error }
}


export default useFetch;