import { FaTwitter } from 'react-icons/fa'

const Tweet = ({quoteAuth}) => {

    return (
        <a className='tweet' id='tweet-quote' 
            href={`https://twitter.com/intent/tweet?text=${quoteAuth.quote} - ${quoteAuth.author}`}target='_blank' rel='noopener noreferrer'>
           <FaTwitter/>
        </a>
    )
}

export default Tweet