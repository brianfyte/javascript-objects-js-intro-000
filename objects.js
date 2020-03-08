var playlist = { ok: 'what' };

function updatePlaylist( playlist, ok, what) {
  playlist[ok] = 'what';
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.ok;
  return playlist
}
