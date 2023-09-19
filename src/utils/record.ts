import { RecordRTCPromisesHandler } from 'recordrtc'

export const getRecorder = async () => {
  const stream = navigator.mediaDevices.getUserMedia({
    audio: true,
  })
  return new RecordRTCPromisesHandler(await stream, {
    type: 'audio',
    mimeType: 'audio/webm',
    disableLogs: false,
    numberOfAudioChannels: 1,
    desiredSampRate: 16000,
    bufferSize: 16384,
    timeSlice: 1000,
  })
}

export const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  let binary = ''
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
