const DisplayQuote = ({quoteAuth}) => {

return(
    <div  id='text' className="text-primary text-center" >
        <h1 id='quote'>{quoteAuth.quote}</h1>
        <h1 id='author'>- {quoteAuth.author}</h1>
    </div>
)
}
export default DisplayQuote