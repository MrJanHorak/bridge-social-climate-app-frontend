import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ForumCarousel.css';

const ForumCarousel = (props) => {


  const forumPosts = props.forumPostsData.slice(0,12).map((post, i) => {
    console.log(i,post)
    
    const likeCount = post.likeLevel ? post.likeLevel.count : 0;
    const commentCount = post.comments ? post.comments.count : 0;
    const date = post.createdAt;
    const dateText = date.slice(5,7) + '/' + date.slice(8,10) + '/' + date.slice(0,4);

    return (
      <article className='carousel-card discuss-card'>
        {
          post.media &&
          <img src={post.media} alt={post.title} style={{ width: "250px", height: "auto"}}/>
        }
        <div className='carousel-card-content'>
          <p className='discuss-creator'>{post.owner.name} &#8901; {dateText}</p>
          <h3 className='discuss-heading'>{post.title}</h3>
          <p className='discuss-content'>{post.content}</p>
          <div className='discuss-feedback'>Likes: {likeCount} Comments: {commentCount}</div>
        </div>
      </article>
    )
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Carousel
      partialVisible={true}
      // autoPlay={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // shouldResetAutoplay={true}
      // autoPlaySpeed={1000}
      responsive={responsive}
      showDots={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // draggable={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}

      containerClass="forum-carousel"
      // itemClass="carousel-item-padding-40-px"
      // sliderClass='multi-carousel-track'
    >
      {forumPosts}
    </Carousel>
  )
}

export default ForumCarousel;
