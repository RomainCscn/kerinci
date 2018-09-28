import React from 'react';

import Lightbox from 'react-images';
import Img from 'gatsby-image'

import style from './gallery.module.css'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: props.photos.map(photo => Object.assign({ srcSet: photo.srcSet, src: photo.src})),
    };
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  returnPhotos(photos) {
    return photos.map((photo, i) => (
      <div key={i} className={style.imageContainer}>
        <div className={style.imageContainerChild}>
          <a href={photo.src} onClick={e => this.openLightbox(i, e)}>
            <Img style={{height: '100%'}} fluid={photo} />
          </a>
        </div>
      </div>
    ))
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <div className={style.imagesContainer}>
          {this.returnPhotos(photos)}
        </div>
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </div>
    );
  }
}