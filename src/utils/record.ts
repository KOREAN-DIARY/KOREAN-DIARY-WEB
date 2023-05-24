import { RecordRTCPromisesHandler } from 'recordrtc'

export const getRecorder = async () => {
  const stream = navigator.mediaDevices.getUserMedia({
    audio: true,
  })
  return new RecordRTCPromisesHandler(await stream, {
    type: 'audio',
    mimeType: 'audio/webm;codecs=pcm',
    disableLogs: false,
    numberOfAudioChannels: 1,
    desiredSampRate: 16000,
    bufferSize: 16384,
    timeSlice: 1000,
  })
}
