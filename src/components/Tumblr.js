import { FaTumblr } from 'react-icons/fa'

const Tumblr = ({quoteAuth}) => {
    return (
    
        <a className='tumblr' id='tumblr-quote' 
            href={`https://twitter.com/intent/tweet?text=${quoteAuth.quote} - ${quoteAuth.author}`}target='_blank' rel='noopener noreferrer' >
            <FaTumblr />
        </a>
    )
}
export default Tumblr