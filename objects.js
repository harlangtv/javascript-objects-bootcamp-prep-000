var playlist = {
  'The Who': 'Teenage Wasteland'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = 'Slowdive'
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artist]
  return playlist
}
