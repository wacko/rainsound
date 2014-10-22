var status = 'none'
var audio = document.createElement('audio')

// Rain recording by Matt Barnard  / https://soundcloud.com/mattt
audio.setAttribute('src', 'rain.mp3')
audio.setAttribute('loop', 'true')

  function audio_control() {
    switch (status) {
      case 'none':
        audio.play()
        audio.volume = 0.5
        status = 'low'
        break
      case 'low':
        audio.volume = 1
        status = 'high'
        break
      case 'high':
        audio.pause()
        status = 'none'
        break
    }

    chrome.browserAction.setIcon({
      path: {
        "19": "images/" + status + "19px.png",
        "38": "images/" + status + "38px.png"
      }
    })

  }

chrome.browserAction.onClicked.addListener(audio_control)