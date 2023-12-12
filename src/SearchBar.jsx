export default ({value, onChange, onSearch})=>{
    return (
        <div>
            <input 
            type="text" 
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            />
            <button onClick={()=>{onSearch()}}>Search</button>
        </div>
    )
}