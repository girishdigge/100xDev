class VideoPlayer:

    def play_video(self, video_file):
        raise NotImplementedError

    def stop_video(self):
        raise NotImplementedError

    def adjust_video_brightness(self, brightness):
        raise NotImplementedError


class AudioPlayer:

    def play_audio(self, audio_file):
        raise NotImplementedError

    def stop_audio(self):
        raise NotImplementedError

    def adjust_audio_volume(self, volume):
        raise NotImplementedError


class MP3Player(AudioPlayer):
    def play_audio(self, audio_file):
        pass

    def stop_audio(self):
        pass

    def adjust_audio_volume(self, volume):
        pass


class AVIVideoPlayer(VideoPlayer):

    def play_video(self, video_file):
        pass

    def stop_video(self):
        pass

    def adjust_video_brightness(self, brightness):
        pass


class MultiMediaPlayer(AudioPlayer, VideoPlayer):
    pass
