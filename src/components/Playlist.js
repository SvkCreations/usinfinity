import React from 'react'

export default function Playlist() {

  return (
    <div className="container py-5 text-center">
      <h1 className='fw-bold display-3'>Our Special Music Playlist</h1>
      <p>Enjoy some of our favorite songs curated just for you!</p>
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className='mt-3' style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1bj83oXnKJGzq85NA0iZBK?utm_source=generator" width="100%" height="600"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  );
}
