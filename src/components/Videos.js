

export const Videos = () => {
let ima = "https://img-9gag-fun.9cache.com/photo/aZDXvG6_460svav1.mp4"
        
    
    return (
        <div>
        <h1>The video autoplay attribute</h1>
        <video width="240" height="180" controls autoplay>
  <source src={ima} type="video/mp4" />
  
  Your browser does not support the video tag.
</video>

      </div>
      
    )
}