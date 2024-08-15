

type PostCounters = {
    count : number ; 

}

export default function PostCounter ({count} : PostCounters){
        
    const label  = count > 1  ? "posteos" : "posteo" ; 




    return <> 

            <div>
                    {count} {label}
            </div>
    
    </>
}