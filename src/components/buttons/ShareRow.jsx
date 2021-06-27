import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import {
  FacebookShareCount,
  RedditShareCount,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon
} from 'react-share'

const ShareRow = (props) => {
  return (
    <Row >
      <Col >
        <FacebookShareButton
          url={props.shareUrl}
          quote={props.title}

        >
          <FacebookIcon size={64} round />
        </FacebookShareButton>

        <Col>
          <FacebookShareCount url={props.shareUrl} >
            {count => count}
          </FacebookShareCount>
        </Col>
      </Col>

      <Col >
        <TwitterShareButton
          url={props.shareUrl}
          title={props.title}

        >
          <TwitterIcon size={64} round />
        </TwitterShareButton>

      </Col>

      <Col >
        <TelegramShareButton
          url={props.shareUrl}
          title={props.title}

        >
          <TelegramIcon size={64} round />
        </TelegramShareButton>

      </Col>

      <Col >
        <WhatsappShareButton
          url={props.shareUrl}
          title={props.title}
          separator=":: "

        >
          <WhatsappIcon size={64} round />
        </WhatsappShareButton>

      </Col>

      <Col >
        <LinkedinShareButton url={props.shareUrl} >
          <LinkedinIcon size={64} round />
        </LinkedinShareButton>
      </Col>

      <Col >
        <RedditShareButton
          url={props.shareUrl}
          title={props.title}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon size={64} round />
        </RedditShareButton>

        <Col>
          <RedditShareCount url={props.shareUrl} />
        </Col>
      </Col>

      <Col >
        <EmailShareButton
          url={props.shareUrl}
          subject={props.title}
          body="body"

        >
          <EmailIcon size={64} round />
        </EmailShareButton>
      </Col>
  </Row>
  )
}

ShareRow.propTypes = {
  title: PropTypes.string,
  shareUrl: PropTypes.string
}

export default ShareRow
