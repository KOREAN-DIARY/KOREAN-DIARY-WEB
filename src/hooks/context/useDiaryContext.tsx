import { DiaryType } from 'hooks/query/useDiaryListQuery'
import { DiaryRequestType } from 'hooks/query/useDiaryMutation'
import { createContext, useContext, useState } from 'react'

export const initialDiary: DiaryType & DiaryRequestType = {
  id: 0,
  content: '',
  originalContent: '',
  date: '',
  writing: 0,
  speaking: 0,
}

const initialState = {
  diary: initialDiary,
  setDiary: (_: DiaryType & DiaryRequestType) => {
    return
  },
}

export const DiaryContext = createContext(initialState)

/**
 * use DiaryProvider for selected brand on header
 */
const DiaryProvider = ({ children }: { children: JSX.Element }) => {
  const [diary, setDiary] = useState<DiaryType & DiaryRequestType>(initialDiary)
  return (
    <DiaryContext.Provider value={{ diary, setDiary }}>
      {children}
    </DiaryContext.Provider>
  )
}

export const useDiaryContext = () => {
  const context = useContext(DiaryContext)
  if (context === undefined) {
    throw new Error('useDiaryContext must be used within a DiaryProvider')
  }
  return context
}

export default DiaryProvider
