import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"

const ShareButtons = ({ quote }) => {

    return (
        <div className="share-btns">
            <FacebookShareButton className="share-btn" url={quote.content}>
                <FacebookIcon size={32} className="share-ic" />
            </FacebookShareButton>
            <TwitterShareButton className="share-btn" url={quote.content}>
                <TwitterIcon size={32} className="share-ic" />
            </TwitterShareButton>
            <WhatsappShareButton className="share-btn" url={quote.content}>
                <WhatsappIcon size={32} className="share-ic" />
            </WhatsappShareButton>
            <LinkedinShareButton className="share-btn" url={quote.content}>
                <LinkedinIcon size={32} className="share-ic" />
            </LinkedinShareButton>
        </div>
    )
}

export default ShareButtons