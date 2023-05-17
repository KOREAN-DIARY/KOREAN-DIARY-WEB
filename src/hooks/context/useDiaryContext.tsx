import { DiaryType } from 'hooks/query/useDiaryListQuery'
import { createContext, useContext, useState } from 'react'

export const initialDiary: DiaryType = {
  id: 0,
  content: '',
  date: '',
  writing: 0,
  speaking: 0,
}

const initialState = {
  selectedDiary: initialDiary,
  setSelectedDiary: (_: DiaryType) => {
    return
  },
}

export const DiaryContext = createContext(initialState)

/**
 * use DiaryProvider for selected brand on header
 */
const DiaryProvider = ({ children }: { children: JSX.Element }) => {
  const [selectedDiary, setSelectedDiary] = useState<DiaryType>(initialDiary)
  return (
    <DiaryContext.Provider value={{ selectedDiary, setSelectedDiary }}>
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
