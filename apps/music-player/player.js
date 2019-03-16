(async function() {
    const { api } = await import('./request.js')
    console.log(api)
    const _ = require('lodash')
    const audioElement = document.getElementById('audio')
    const player = app.p

    async function getLyric(id) {
        try {
            const lyricResponse = await api.song.lyric(id)
            const lyric = new Lyrics(lyricResponse.lrc.lyric)
            return lyric
        } catch(e) {
            return null
        }
    }

    window.playSong = async function(id) {
        id = +id
        const urlResponse = await api.song.url(id)
        player.src = urlResponse.data[0].url.replace(/(m\d+?)c/, '$1')
        await app.$nextTick()

        audioElement.play()
        player.paused = false

        player.currentSongId = id
        currentLyric = await getLyric(id)
        if (currentLyric)
            player.lyric = currentLyric.getLyrics()
        else
            player.lyric = null

        if (!_.some(player.playlist, { id })) {
            try {
                const songDetail = (await api.song.detail(id)).songs[0]
                player.playlist.push(songDetail)
            } catch (e) { /* Ignore */ }
        }
    }

    async function musicPlayPause() {
        player.paused = !player.paused
    }

    function musicStop() {
        audioElement.stop()
    }

    function musicNextTrack() {

    }

    function musicPreviousTrack() {

    }

    document.addEventListener('keydown', function(event) {
        switch(event.which) {
            case 32:
                if (!event.repeat) {
                    musicPlayPause()
                }
                event.preventDefault()
                return
            default:
                break
        }
    })

    document.getElementById('btnPlayPause').addEventListener('click',  musicPlayPause)

    document.getElementById('btnRepeatMode').addEventListener('click', function() {
        if (!player.repeatMode) {
            player.repeatMode = 'one'
        } else {
            player.repeatMode = null
        }
    })

    document.getElementById('btnTopLyric').addEventListener('click', function() {
        player.topLyric = !player.topLyric
    })

    audioElement.addEventListener('timeupdate', function() {
        currentTimeLock = true
        player.currentTime = audioElement.currentTime
        setTimeout(() => { currentTimeLock = false }, 0)
        player.duration = audioElement.duration
        if (currentLyric)
            document.getElementById('lyric').style.top = `-${currentLyric.select(audioElement.currentTime) * 36}px`
    })

    audioElement.addEventListener('ended', function() {
        player.paused = true
    })

    app.$watch('p', function(newVal) {
        localStorage.setItem('MusicPlayerStorage', JSON.stringify(newVal))
    }, { deep: true })

    app.$watch('p.paused', async function() {
        try {
            if (player.paused) {
                await audioElement.pause()
            } else {
                await audioElement.play()
            }
        } catch(e) { /* Ignore */ }
    })

    app.$watch('p.currentTime', function() {
        if (currentTimeLock)
            return
        audioElement.currentTime = player.currentTime
    })

    app.$watch('p.repeatMode', function() {
        if (!player.repeatMode) {
            audioElement.loop = false
        } else {
            audioElement.loop = true
        }
    }, { immediate: true })

    app.$on('playlistClicked', function(song) {
        playSong(song.id)
    })

    let currentTimeLock = false
    let currentLyric = null

    const storage = JSON.parse(localStorage.getItem('MusicPlayerStorage') || '{}')

    Vue.set(player, 'currentSongId', storage.currentSongId || 0)
    Vue.set(player, 'duration', storage.duration || '')
    Vue.set(player, 'lyric', storage.lyric || '')
    Vue.set(player, 'muted', storage.muted || false)
    Vue.set(player, 'playlist', storage.playlist || [])
    Vue.set(player, 'repeatMode', storage.repeatMode || null)
    Vue.set(player, 'src', storage.src || '')
    Vue.set(player, 'topLyric', storage.topLyric || false)
    Vue.set(player, 'volume', storage.volume || 100)

    Vue.nextTick().then(function() {
        Vue.set(player, 'paused', storage.paused !== undefined ? storage.paused : true)
        Vue.set(player, 'currentTime', storage.currentTime || 0)
    })

    if (player.currentSongId) {
        try {
            currentLyric = await getLyric(player.currentSongId)
            player.lyric = currentLyric.getLyrics()
        } catch(e) {
            player.lyric = null
        }
    }
})()